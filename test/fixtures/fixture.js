'use strict';
exports.handler = (event, context) => {
	if (event === undefined) {
		context.fail(new Error('Event is undefined'));
		return;
	}

	event.functionName = context.functionName;

	context.succeed(event);
};
