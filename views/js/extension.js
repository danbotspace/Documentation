/*
 * DBH Docs extension
 * Supports various widgets related to pages and sidebar
 * Usage:
 * p{link} page name                      ->  <a href="link" class="page card">page name</a>
 * p{icon ++ link} page name              ->  <a href="link" class="page card"><i class="icon"></i>page name</a>
 * t{**Note/Good To Know/etc**: text}     ->  <tip class="card"><i class="fa-solid fa-circle-question"></i><f>**Note/Good To Know/etc**: text</f></tip>
 * ??text??                               ->  <copy>text<f>Copied!</></copy>
 * u{                                     ->  <user> ...
 * 'card': 'link';                        ->  <f> ... <a href="link" class="card"><i class="fa-solid fa-address-card"></i></a>
 * 'desc': 'what you did to the project'; ->  <span>what you did to the project</span>
 * 'github': 'github name';               ->  <a href="https://github.com/github name" class="github"><i class="fa-brands fa-github"></i></a>
 * 'name': 'your name';                   ->  name
 * 'pfp': 'link';                         ->  <img src="link"> ... <t> ...
 * 'twitter': 'twitter name';             ->  <a href="https://twitter.com/twitter name" class="github"><i class="fa-brands fa-twitter"></i></a>
 * }                                      ->  ... </f></t></user>
 */
(function (extension) {
    'use strict';
    if (typeof showdown !== 'undefined') {
        // Global (Browser or Node.js global)
        extension(showdown);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['showdown'], extension);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = extension(require('showdown'));
    } else {
        // Showdown was not found
        throw Error('Could not find showdown library');
    }
}(function (showdown) {
    'use strict';
    showdown.extension('showdownDBH', function () {
        let copy = new RegExp('\\?\\?(.*)\\?\\?', 'gm');
        let page = new RegExp('p{(.*)} (.*)');
        let pagex = new RegExp('p{(.*) \\+\\+ (.*)} (.*)');
        let tip = new RegExp('t{(.*)}');
        let user = new RegExp("u{\n(?:'card': '(.*)';\n|.*\n)?(?:'desc': '(.*)';\n|.*\n)?(?:'github': '(.*)';\n|.*\n)?(?:'name': '(.*)';\n|.*\n)?(?:'pfp': '(.*)';\n|.*\n)?(?:'twitter': '(.*)';\n|.*)?}", 'gm')
        let img = new RegExp('<img src="(.*)" alt="(.*)" />', 'g');
        return [
            // listeners
            {
                type: 'listener',
                listeners: {
                    'italicsAndBold.after': function (event, text, options, globals) {
                        // Copy syntax
                        text = text.replace(copy, '<copy>$1<f>Copied!</f></copy>');
                        // Tip syntax
                        text = text.replace(tip, '<tip class="card"><i class="fa-solid fa-circle-question"></i><f>$1</f></tip>');
                        // Extended page syntax
                        text = text.replace(pagex, '<a href="$2" class="page card"><i class="$1"></i>$3</a>');
                        // Page syntax
                        text = text.replace(page, '<a href="$1" class="page card"><i class="fa-solid fa-arrow-right-to-bracket"></i>$2</a>');
                        // User syntax
                        text = text.replace(user, function(match, card, desc, github, name, pfp, twitter, offset, text) {
                            // If pfp field empty parse nothing
                            // alphabet order only!
                            let ppfp = (!pfp) ? '' : `<img src="${pfp}">`;
                            let pdesc = (!desc) ? '' : `<span>${desc}</span>`;
                            let pcard = (!card) ? '' : `<a href="${card}"><i class="fa-solid fa-address-card"></i></a>`;
                            let pgithub = (!github) ? '' : `<a href="https://github.com/${github}"><i class="fa-brands fa-github"></i></a>`;
                            let ptwitter = (!twitter) ? '' : `<a href="https://twitter.com/${twitter}"><i class="fa-brands fa-twitter"></i></a>`;
                            return '<user class="card">' + ppfp + '<t>' + name + pdesc + '<f>' + pcard + pgithub + ptwitter + '</f></t></user>';
                        });
                        return text;
                    },
                    'githubCodeBlocks.after': function (event, text, options, globals) {
                        let mlink = new RegExp('\\+\\+ (.*) \\+\\+ (.*) \\+\\+ (.*) \\+\\+', 'g');
                        let mli = new RegExp('\\[\\[', 'g');
                        let mlic = new RegExp('\\]\\]', 'g');
                        let mul = new RegExp('{{', 'g');
                        let mulc = new RegExp('}}', 'g');
                        let mem = new RegExp('\\+-(.*)-\\+', 'g');
                        // Menu syntax
                        text = text.replace(mlink, '<a href="$2"><i class="$1"></i>$3</a>');
                        text = text.replace(mul, '<ul>');
                        text = text.replace(mulc, '</ul>');
                        text = text.replace(mli, '<li>');
                        text = text.replace(mlic, '</li>');
                        text = text.replace(mem, '<em>$1</em>');
                        return text;
                    },
                    'images.after': function (event, text, options, globals) {
                        text = text.replace(img, '<a href="$1" target="_blank"><img src="$1" alt="$2" title="$2" /></a>')
                        return text;
                    }
                }
            }
        ];
    });
}));
