'use strict';
var context = require('aws-lambda-mock-context');

module.exports = function (fn, options) {
	return function (event) {
		var ctx = context(options);

		fn.apply(this, [event, ctx]);

		return ctx.Promise;
	};
};
