import test from 'ava';
import m from '../';
import {handler, cbHandler} from './fixtures/fixture';

const opts = {functionName: 'pify'};

test('context result', async t => {
	t.deepEqual(await m(handler)({hello: 'world'}), {hello: 'world', functionName: 'aws-lambda-mock-context'});
	t.deepEqual(await m(handler, opts)({hello: 'world'}), {hello: 'world', functionName: 'pify'});
});

test('context error', t => {
	t.throws(m(handler)(), 'Event is undefined');
});

test('cb result', async t => {
	t.deepEqual(await m(cbHandler)({hello: 'world'}), {hello: 'world', functionName: 'aws-lambda-mock-context'});
	t.deepEqual(await m(cbHandler, opts)({hello: 'world'}), {hello: 'world', functionName: 'pify'});
});

test('cb error', t => {
	t.throws(m(cbHandler)(), 'Event is undefined');
});
