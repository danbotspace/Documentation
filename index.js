const express = require('express'),
      app = express(),
      chalk = require('chalk'),
      favicon = require('serve-favicon'),
      figlet = require('figlet'),
      fs = require('fs'),
      path = require('path'),
      rateLimit = require('express-rate-limit'),
      showdown  = require('showdown'),
      converter = new showdown.Converter({strikethrough: 'true', underline: 'true', disableForced4SpacesIndentedSublists: 'true'});

// Declare extension
showdown.extension("Docs", function() {
  return [
    {
      type: 'lang',
      regex: 'p\{(.*)\} (.*)',
      replace: function(text, leadingSlash, match) {
          match = text.match('p\{(.*)\} (.*)')
          return '<a href="' + match[1] + '" class="page">' + match[2] + '</a>';
      }
    },
    {
      type: 'lang',
      regex: 't\{(.*)\}',
      replace: function(text, leadingSlash, match) {
          match = text.match('t\{(.*)\}')
          return '<tip><f>' + match[1] + '</f></tip>';
      }
    }
  ]
});

// Ratelimiting
const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
});
app.use(limiter);
app.use(favicon(__dirname + '/public/dbh-docs.ico'));
app.use(express.static(path.join(__dirname, "public")));
converter.useExtension("Docs"); /* Add an extension to converter */

app.set('view engine', 'ejs');
app.get('*', (req, res) => {
    let url = req.url
    if (url == '/') url = '/introduction';
    fs.readFile(__dirname + '/docs' + url + '.md', 'utf8' , (err, data) => {
    	if (err) data = '# Page not found, 404!\nI found nothing but a ruble laying down in tears...\n![Ruble Crying](/content/ruble-crying.png)'
        let converted = converter.makeHtml(data);
        let regex = /<p>(.*?)<\/p>/;
        let description = regex.exec(converted);
        description = (description) ? description[1] : "";
        description = description.replace( /(<([^>]+)>)/ig, '');
        fs.readFile(__dirname + '/layout/summary.md', 'utf8' , (err, data) => {
    		if (err) res.send({error: 'Menu items are broken!'})
        	let items = converter.makeHtml(data);
            res.render(__dirname + '/layout/200', {content:converted, menu:items, metaDescription:description});
    	});
    });
});

// Start
app.listen(process.env.SERVER_PORT ? process.env.SERVER_PORT : 8080 /*If DBH port is present, returns the port if not, returns 8080*/, () => {
    figlet('DBH Docs', {
        font: 'Alligator2'
    }, function(err, data) {
        console.clear();
        console.log(chalk.blue.bold(data));
    });
})

// Execute runner-actions after starting the server
function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}
exec('actions-runner/run.sh');
