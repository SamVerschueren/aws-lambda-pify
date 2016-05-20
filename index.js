'use strict';
const context = require('aws-lambda-mock-context');
const pify = require('pify');

module.exports = (fn, options) => {
	const ctx = context(options);

	return event => Promise.race([
		pify(fn)(event, ctx),
		ctx.Promise
	]);
};
