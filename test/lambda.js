'use strict';

exports.handler = function (event, context) {
	if (event === undefined) {
		return context.fail('Event is undefined');
	}

	context.succeed(event);
};
