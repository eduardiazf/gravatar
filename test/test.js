var gravatar = require('../lib/gravatar');

describe('#Gravatar', function () {
    'use strict';

    var basicURI  = 'http://www.gravatar.com/avatar/',
        secureURI = 'https://secure.gravatar.com/avatar/';

    it('should return correct hash', function () {
        gravatar.hash('eduar.diaz37@gmail.com').
            should.equal('4a7a052e62f8a70f3913f53080a18f41');
    });

    it('should return correct hash ignoring uppercase', function () {
        gravatar.hash('eduar.diaz37@GMAIL.com').
            should.equal('4a7a052e62f8a70f3913f53080a18f41');
        gravatar.hash('EDUAR.DIAZ37@GMAIL.com').
            should.equal('4a7a052e62f8a70f3913f53080a18f41');
    });

    it('should return corret hash ignoring space', function () {
        gravatar.hash('   eduar.diaz37@gmail.com   ').
            should.equal('4a7a052e62f8a70f3913f53080a18f41');
    });

    it('should generate uri correct', function () {
        gravatar.url('eduar.diaz37@gmail.com').
            should.equal(basicURI + '4a7a052e62f8a70f3913f53080a18f41');
        gravatar.url('eduar.diaz37@hotmail.com').
            should.equal(basicURI + 'cd0f3bae2a39e125383abc8c3f4e4948');
    });

    it('should generate uri in params', function () {
        gravatar.url('eduar.diaz37@gmail.com', {'s': '200', 'r': 'pg'}).
            should.equal(basicURI + '4a7a052e62f8a70f3913f53080a18f41?s=200&r=pg');
    });

    it('should return ""', function () {
        gravatar.parseParams({}).should.equal('');
    });

    it('should return ?r=pg&s=200', function () {
        gravatar.parseParams({'r': 'pg', 's': '200'}).should.equal('?r=pg&s=200');
    });

    it('should accept https', function () {
        gravatar.url('eduar.diaz37@gmail.com', {}, true).
            should.equal(secureURI + '4a7a052e62f8a70f3913f53080a18f41');
    });
});