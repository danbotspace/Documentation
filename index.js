const express = require('express'),
      app = express(),
      chalk = require('chalk'),
      favicon = require('serve-favicon'),
      figlet = require('figlet'),
      fs = require('fs'),
      path = require('path'),
      rateLimit = require('express-rate-limit'),
      showdown  = require('showdown'),
      converter = new showdown.Converter({strikethrough: 'true', underline: 'true'});

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

app.set('view engine', 'ejs');
app.get('*', (req, res) => {
    let url = req.url
    if (url == '/') url = '/introduction';
    fs.readFile(__dirname + '/docs' + url + '.md', 'utf8' , (err, data) => {
    	if (err) data = '# Page not found, 404!\nI found nothing but a ruble laying down in tears...'
        let converted = converter.makeHtml(data);
        fs.readFile(__dirname + '/layout/summary.md', 'utf8' , (err, data) => {
    		if (err) res.send({error: 'Menu items are broken!'})
        	let items = converter.makeHtml(data);
            res.render(__dirname + '/layout/200', {content:converted, menu:items});
    	});
    });
});

app.listen(1367, () => {
    figlet('DBH Docs', {
        font: 'Alligator2'
    }, function(err, data) {
        console.clear();
        console.log(chalk.blue.bold(data));
    });
})
