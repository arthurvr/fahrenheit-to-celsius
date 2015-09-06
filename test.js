'use strict';
var test = require('ava');
var f = require('./');

test('should convert fahrenheit to celsius', function (t) {
	t.is(f(33.8).toFixed(2), '1.00');
	t.is(f(23), -5);
	t.is(f(59), 15);
	t.is(f(0).toFixed(2), '-17.78');

	t.end();
});

test('should throw when passing nonsense input', function (t) {
	['foobar', function () {}, [], {}].forEach(function (input) {
		t.throws(function () {
			f(input);
		});
	});

	t.end();
});
