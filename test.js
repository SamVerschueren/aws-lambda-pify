import test from 'ava';
import fn from './';
import {handler} from './fixture';

const opts = {functionName: 'pify'};

test('result', async t => {
	t.same(await fn(handler)({hello: 'world'}), {hello: 'world', functionName: 'aws-lambda-mock-context'});
	t.same(await fn(handler, opts)({hello: 'world'}), {hello: 'world', functionName: 'pify'});
});

test('error', t => {
	t.throws(fn(handler)(), 'Event is undefined');
});
