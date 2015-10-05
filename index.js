'use strict';
var context = require('aws-lambda-mock-context');

module.exports = function (fn) {
	return function (event) {
		fn.apply(this, [event, context()]);

		return context.Promise;
	};
};
