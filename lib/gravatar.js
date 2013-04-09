'use strict';

var crypto      = require('crypto'),
    basicURI    = 'http://www.gravatar.com/avatar/',
    secureURI   = 'https://secure.gravatar.com/avatar/',
    querystring = require('querystring');

var hash = function (email) {
    return crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex');
};

var parseParams = function (params) {
    var query = querystring.stringify(params);
    return query ? ('?' + query) : '';
};

var url = function (email, options, https) {
    var uri = https ? secureURI : basicURI;
    return uri + hash(email) + parseParams(options);
};

module.exports = {
    hash         : hash,
    parseParams  : parseParams,
    url          : url
};