const express = require('express'),
      app = express(),
      fs = require('fs'),
      dbh = require('./views/js/functions.js'),
      limiter = require('express-rate-limit')({ windowMs: 60 * 1000, max: 250, standardHeaders: true, legacyHeaders: false }),
      path = require('path'),
      paragraph = new RegExp('<p>(.*?)<\/p>'),
      PORT = process.env.SERVER_PORT || 3000;
      tag = new RegExp('(<([^>]+)>)', 'ig'),
      showdown  = require('showdown'),
      showdownDBH = require('./views/js/extension.js'),
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
app.use(express.static(path.join(__dirname, "public"), {
    setHeaders: function(res, hpath) {
        if (path.extname(hpath) == '.css') return;
        res.set('Cache-control', 'public, max-age=' + 60 * 60 * 24 * 365.24 * 1000); // A year
    }
}));
app.set('trust proxy', 1);
app.set('view engine', 'ejs');

// /issue-tracker/id/[ID/name] returns post, IDs start from 1
app.get('/issue-tracker', (req, res) => {
    const directory = __dirname + '/docs/issue-tracker/id';
    let converted = '# Issue Tracker\nAll known DBH issues and if possible, their solutions.\nt{**Note**: This blog RSS may not contain all errors and issues. Contact contributors for any changes or consider expanding it manually through [GitHub repository](//github.com/DBH-Docs/Documentation/).}<ul class="issue-tracker">';
    let description = 'All known DBH issues and if possible, their solutions.';
    fs.readdir(directory, (err, files) => {
        if (err) console.log(dbh.defineMessage('ERR', err));
        let count = 1;
        files.sort() // Sort in descending alphabetic order
            .reverse()
            .forEach(file => {
                converted += `<li id="${count}'"><hr>\n` + fs.readFileSync(directory + '/' + file, 'utf8') + '</li>';
                count++;
            });
    });
    fs.readFile(__dirname + '/views/summary.md', 'utf8', (err, data) => {
        if (err) console.log(dbh.defineMessage('ERR', err));
        let items = converter.makeHtml(data);
        converted += '</ul>\n<btn>Load more...</btn>';
        converted = converter.makeHtml(converted);
        let np = dbh.npFromSummary(req.url);
        res.status(200).render(__dirname + '/views/200', {
            content: converted,
            formatNextPage: np[1],
            iconNextPage: np[2],
            logo: dbh.randomLogo(),
            menu: items,
            metaDescription: description,
            nextPage: np[0]
        });
    });
});

// Redirect to /[page]/ if /[page]
// Each request reads for markdown file in docs folder.
// Converts md to html to respond with proper format.
app.get('*', (req, res) => {
    let url = req.url;
    if (!url.endsWith('/')) return res.redirect(url + '/');
    if (url == '/') return res.redirect('/introduction/');
    fs.readFile(__dirname + '/docs' + url.slice(0, -1) + '.md', 'utf8' , (err, data) => {
    	if (err) data = '# Page not found, 404!\nI found nothing... Here\'s a picture of some node.js dev duck\n![An image of node.js dev duck by devducks](//cdn.shopify.com/s/files/1/1321/6369/products/DSCF1962_412x412.jpg)'
        let converted = converter.makeHtml(data);
        let description = paragraph.exec(converted);
        description = (description) ? description[1] : "";
        description = description.replace(tag, '');
        fs.readFile(__dirname + '/views/summary.md', 'utf8', (err, data) => {
    		if (err) console.log(dbh.defineMessage('ERR', err));
        	let items = converter.makeHtml(data);
            let np = dbh.npFromSummary(url);
            res.status(200).render(__dirname + '/views/200', {
                content: converted,
                formatNextPage: np[1],
                iconNextPage: np[2],
                logo: dbh.randomLogo(),
                menu: items,
                metaDescription: description,
                nextPage: np[0]
            });
    	});
    });
});

// Starting the web.
// If DBH port is present, returns the port if not, returns 8080.
app.listen(PORT, () => {
    require('figlet')('DBH Docs', {
        font: 'Speed'
    }, function(err, data) {
        console.clear();
        console.log(require('chalk').blue.bold(data) + '\n');
        console.log(dbh.defineMessage('OK', 'Listening to port ' + PORT));
        dbh.exec('actions-runner/run.sh'); // Execute runner-actions after starting the server.
    });
});