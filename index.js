'use strict';
var context = require('aws-lambda-mock-context');

module.exports = function (fn) {
	return function (event) {
		var ctx = context();

		fn.apply(this, [event, ctx]);

		return ctx.Promise;
	};
};
