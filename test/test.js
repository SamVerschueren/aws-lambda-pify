import test from 'ava';
import m from '../';
import {handler} from './fixtures/fixture';

const opts = {functionName: 'pify'};

test('result', async t => {
	t.deepEqual(await m(handler)({hello: 'world'}), {hello: 'world', functionName: 'aws-lambda-mock-context'});
	t.deepEqual(await m(handler, opts)({hello: 'world'}), {hello: 'world', functionName: 'pify'});
});

test('error', t => {
	t.throws(m(handler)(), 'Event is undefined');
});
