'use strict';
var assert = require('assert');
var f = require('./');

it('should convert fahrenheit to celsius', function () {
	assert.equal(f(33.8).toFixed(2), '1.00');
	assert.equal(f(23), -5);
	assert.equal(f(59), 15);
	assert.equal(f(0).toFixed(2), '-17.78');
});
