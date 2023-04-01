const express = require('express');
const app = express();
const fs = require('fs');
const showdown  = require('showdown');

const dbh = require('./functions');
const extension = require('./extension'); // Used to add custom extension

const PORT = process.env.SERVER_PORT || 3000;
const limiter = require('express-rate-limit')({
    windowMs: 60 * 1000,
    max: 250,
    standardHeaders: true,
    legacyHeaders: false
});
const converter = new showdown.Converter({ 
    strikethrough: 'true',
    tables: 'true',
    underline: 'true',
    disableForced4SpacesIndentedSublists: 'true',
    openLinksInNewWindow: 'true',
    extensions: ['DBH', require('showdown-highlight')({ pre: true })]
});

// Middleware.
app.use(limiter);
app.use(require('compression')());
app.use(require('serve-favicon')('./public/dbh-docs.ico'));
app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.use(express.static("./public", {
    setHeaders: function(res, hpath) {
        if (require('path').extname(hpath) == '.css') return;
        res.set('Cache-control', 'public, max-age=' + 60 * 60 * 24 * 365.24 * 1000); // A year
    }
}));

// /issue-tracker/id/[ID/name] returns post, IDs start from 1
// app.get('/issue-tracker', (req, res) => {
//     const directory = './docs/issue-tracker/id';
//     let converted = '# Issue Tracker\nAll known DBH issues and if possible, their solutions.\nt{**Note**: This blog RSS may not contain all errors and issues. Contact contributors for any changes or consider expanding it manually through [GitHub repository](//github.com/DBH-Docs/Documentation/).}<ul class="issue-tracker">';
//     let description = 'All known DBH issues and if possible, their solutions.';
//     fs.readdir(directory, (err, files) => {
//         if (err) console.log(dbh.defineMessage('ERR', err));
//         let count = 1;
//         files.sort(function(a, b) { return a.slice(0, -3) - b.slice(0, -3); })
//             .reverse()
//             .forEach(file => {
//                 converted += `<li id="${count}'"><hr>\n` + fs.readFileSync(directory + '/' + file, 'utf8') + '</li>';
//                 count++;
//             });
//     });
//     fs.readFile('./views/summary.md', 'utf8', (err, data) => {
//         if (err) console.log(dbh.defineMessage('ERR', err));
//         let items = converter.makeHtml(data);
//         converted += '</ul>\n<btn>Load more...</btn>';
//         converted = converter.makeHtml(converted);
//         let np = dbh.npFromSummary(req.url);
//         res.status(200).render('ejs/200', {
//             content: converted,
//             formatNextPage: np[1],
//             iconNextPage: np[2],
//             logo: dbh.randomLogo(),
//             menu: items,
//             menuFormatted: dbh.filterSummary(items),
//             metaDescription: description,
//             nextPage: np[0]
//         });
//     });
// });

// Redirect to /[page]/ if /[page]
// Each request reads for markdown file in docs folder.
// Converts md to html to respond with proper format.
app.get('*', (req, res) => {
    // Moving to https://github.com/danbotspace/docs
    res.redirect("https://docs.danbot.space" + req.url);
//     let url = req.url;
//     if (!url.endsWith('/')) return res.redirect(url + '/');
//     if (url == '/') return res.redirect('/introduction/');
//     fs.readFile('./docs' + url.slice(0, -1) + '.md', 'utf8' , (err, data) => {
//     	if (err) data = '# Page not found, 404!\nI found nothing... Here\'s a picture of some node.js dev duck\n![An image of node.js dev duck by devducks](//cdn.shopify.com/s/files/1/1321/6369/products/DSCF1962_412x412.jpg)'
//         let converted = converter.makeHtml(data);
//         let description = /<p>(.*?)<\/p>/.exec(converted);
//         description = (description) ? description[1] : "";
//         description = description.replace(/(<([^>]+)>)/ig, '');
//         fs.readFile('./views/summary.md', 'utf8', (err, data) => {
//     		if (err) console.log(dbh.defineMessage('ERR', err));
//         	let items = converter.makeHtml(data);
//             let np = dbh.npFromSummary(url);
//             res.status(200).render('ejs/200', {
//                 content: converted,
//                 formatNextPage: np[1],
//                 iconNextPage: np[2],
//                 logo: dbh.randomLogo(),
//                 menu: items,
//                 menuFormatted: dbh.filterSummary(items),
//                 metaDescription: description,
//                 nextPage: np[0]
//             });
//     	});
//     });
});

// Starting the web.
// If DBH port is present, returns the port if not, returns 8080.
app.listen(PORT, () => {
    require('figlet')('DBH Docs', {
        font: 'Elite'
    }, function(err, data) {
        console.clear();
        console.log(require('chalk').blue.bold(data) + '\n');
        console.log(dbh.defineMessage('OK', 'Listening to port ' + PORT));
        dbh.exec('actions-runner/run.sh'); // Execute runner-actions after starting the server.
    });
});
