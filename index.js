'use strict';
const context = require('aws-lambda-mock-context');

module.exports = (fn, options) => {
	return event => {
		const ctx = context(options);

		fn.apply(this, [event, ctx]);

		return ctx.Promise;
	};
};
