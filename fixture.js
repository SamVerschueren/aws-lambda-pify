'use strict';

exports.handler = function (event, context) {
	if (event === undefined) {
		return context.fail(new Error('Event is undefined'));
	}

	event.functionName = context.functionName;

	context.succeed(event);
};
