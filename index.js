'use strict';
module.exports = function (f) {
	if (typeof f !== 'number') {
		throw new TypeError('Expected a number');
	}

	return (f - 32) / 1.8;
};
