/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
jQuerynavigator = window.navigator,
jQuerylocation = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
JavaScript// The jQuery object is actually just the init constructor 'enhanced'
JavaScriptreturn new jQuery.fn.init( selector, context, rootjQuery );
jQuery},

jQuery// Map over jQuery in case of overwrite
jQuery_jQuery = window.jQuery,

jQuery// Map over the $ in case of overwrite
jQuery_$ = window.$,

jQuery// A central reference to the root jQuery(document)
jQueryrootjQuery,

jQuery// A simple way to check for HTML strings or ID strings
jQuery// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
jQueryquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

jQuery// Check if a string has a non-whitespace character in it
jQueryrnotwhite = /\S/,

jQuery// Used for trimming whitespace
jQuerytrimLeft = /^\s+/,
jQuerytrimRight = /\s+$/,

jQuery// Match a standalone tag
jQueryrsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

jQuery// JSON RegExp
jQueryrvalidchars = /^[\],:{}\s]*$/,
jQueryrvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
jQueryrvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
jQueryrvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

jQuery// Useragent RegExp
jQueryrwebkit = /(webkit)[ \/]([\w.]+)/,
jQueryropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
jQueryrmsie = /(msie) ([\w.]+)/,
jQueryrmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

jQuery// Matches dashed string for camelizing
jQueryrdashAlpha = /-([a-z]|[0-9])/ig,
jQueryrmsPrefix = /^-ms-/,

jQuery// Used by jQuery.camelCase as callback to replace()
jQueryfcamelCase = function( all, letter ) {
JavaScriptreturn ( letter + "" ).toUpperCase();
jQuery},

jQuery// Keep a UserAgent string for use with jQuery.browser
jQueryuserAgent = navigator.userAgent,

jQuery// For matching the engine and version of the browser
jQuerybrowserMatch,

jQuery// The deferred used on DOM ready
jQueryreadyList,

