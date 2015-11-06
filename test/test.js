import test from 'ava';
import fn from '../';
import {handler} from './lambda';

test('succeed', async t => {
	const result = await fn(handler)({hello: 'world'});

	t.same(await fn(handler)({hello: 'world'}), {hello: 'world'});
});

test('fails', async t => {
	try {
		await fn(handler)();
		t.fail();
	} catch (err) {
		t.is('Event is undefined', err);
	}
});
