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
            // listeners
            {
                type: 'listener',
                listeners: {
                    'italicsAndBold.after': function (event, text, options, globals) {
                        // Tip syntax
                        text = text.replace(tip, '<tip><f>$1</f></tip>');
                        // Page syntax
                        text = text.replace(page, '<a href="$1" class="page">$2</a>');
                        return text;
                    }
                }
            },
            // Menu syntax
            {
                type: 'lang',
                regex: '\\+\\+ (.*) \\+\\+ (.*) \\+\\+ (.*) \\+\\+',
                replace: '<a href="$2"><i class="$1"></i>$3</a>'
            },
            {
                type: 'lang',
                regex: '{{',
                replace: '<ul>'
            },
            {
                type: 'lang',
                regex: '}}',
                replace: '</ul>'
            },
            {
                type: 'lang',
                regex: '\\[\\[',
                replace: '<li>'
            },
            {
                type: 'lang',
                regex: '\\]\\]',
                replace: '</li>'
            },
            {
                type: 'lang',
                regex: '\\+-(.*)-\\+',
                replace: '<em>$1</em>'
            }
        ];
    });
}));
