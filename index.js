const express = require('express'),
      app = express(),
      fs = require('fs'),
      limiter = require('express-rate-limit')({ windowMs: 60 * 1000, max: 100, standardHeaders: true, legacyHeaders: false }),
      path = require('path'),
      paragraph = new RegExp('<p>(.*?)<\/p>'),
      tag = new RegExp('(<([^>]+)>)', 'ig'),
      showdown  = require('showdown'),
      showdownDBH = require('./extension.js'),
      showdownHighlight = require('showdown-highlight'),
      converter = new showdown.Converter({ 
          strikethrough: 'true',
          tables: 'true',
          underline: 'true',
          disableForced4SpacesIndentedSublists: 'true',
          extensions: ['showdownDBH', showdownHighlight({ pre: true })]
      });

// Middleware.
app.use(limiter);
app.use(require('compression')());
app.use(require('serve-favicon')(__dirname + '/public/dbh-docs.ico'));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set(function(req, res, next){
    res.header('Cache-Control', 'max-age=2592000');
    next();
});

app.get('/issue-tracker', (req, res) => {
    const directory = __dirname + '/public/issue-tracker';
    let converted = '# Issue Tracker\nAll known DBH issues and if possible, their solutions.\nt{**Note**: This blog RSS may not contain all errors and issues. Contact contributors for any changes or consider expanding it manually through [GitHub repository](//github.com/DBH-Docs/Documentation/).}<ul class="issue-tracker">';
    let description = 'All known DBH issues and if possible, their solutions.';
    fs.readdir(directory, (err, files) => {
        files.sort() // Sort in descending alphabetic order
            .reverse()
            .forEach(file => {
                converted += '<li><hr>\n' + fs.readFileSync(directory + '/' + file, 'utf8') + '</li>';
            });
    });
    fs.readFile(__dirname + '/layout/summary.md', 'utf8', async (err, data) => {
        let items = converter.makeHtml(data);
        converted += '</ul>\n<btn>Load more...</btn>';
        converted = await converter.makeHtml(converted);
        res.render(__dirname + '/layout/200', {content:converted, menu:items, metaDescription:description});
    });
});

// Each request reads for markdown file in docs folder.
// Converts md to html to respond with proper format.
app.get('*', (req, res) => {
    let url = req.url
    if (url == '/') url = '/introduction';
    fs.readFile(__dirname + '/docs' + url + '.md', 'utf8' , (err, data) => {
    	if (err) data = '# Page not found, 404!\nI found nothing but a ruble laying down in tears...\n![Ruble Crying](/content/ruble-crying.png)'
        let converted = converter.makeHtml(data);
        let description = paragraph.exec(converted);
        description = (description) ? description[1] : "";
        description = description.replace(tag, '');
        fs.readFile(__dirname + '/layout/summary.md', 'utf8' , (err, data) => {
    		if (err) res.send({error: 'Menu items are broken!'})
        	let items = converter.makeHtml(data);
            res.render(__dirname + '/layout/200', {content:converted, menu:items, metaDescription:description});
    	});
    });
});

// Starting the web.
// If DBH port is present, returns the port if not, returns 8080.
app.listen(process.env.SERVER_PORT ? process.env.SERVER_PORT : 8080 , () => {
    require('figlet')('DBH Docs', {
        font: 'Alligator2'
    }, function(err, data) {
        console.clear();
        console.log(require('chalk').blue.bold(data));
    });
});

// Execute runner-actions after starting the server.
require('child_process').exec('actions-runner/run.sh', function(err, stdout, stderr) {
    console.log(stdout);
    if (err) console.log(stderr)
});