/**
 * DBH Docs extension
 * Supports various widgets related to pages and menu
 * Usage:
 * p{link} page name                     ->  <a href="link" class="page">page name</a>
 * t{**Note/Good To Know/etc**: text}    ->  <tip><f>**Note/Good To Know/etc**: text</f></tip>
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
        let page = new RegExp('p\{(.*)\} (.*)');
        let tip = new RegExp('t\{(.*)\}');
        return [
            // Page syntax
            {
                type: 'listener',
                listeners: {
                    'italicsAndBold.after': function (event, text, options, globals) {
                        return text.replace(tip, function (match, p1, offset, string) {
                            return '<tip><f>' + p1 + '</f></tip>';
                        });
                    }
                }
            },

            // Tip syntax
            {
                type: 'listener',
                listeners: {
                    'italicsAndBold.after': function (event, text, options, globals) {
                        return text.replace(page, function (match, p1, p2, offset, string) {
                        return '<a href="' + p1 + '" class="page">' + p2 + '</a>';
                        });
                    }
                }
            }
        ];
    });
}));
