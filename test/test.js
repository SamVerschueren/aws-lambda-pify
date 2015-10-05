import test from 'ava';
import fn from '../';
import {handler} from './lambda';

test('succeed', async t => {
	const result = await fn(handler)({hello: 'world'});

	t.same({hello: 'world'}, result);
});

test('fails', async t => {
	try {
		await fn(handler)();
	} catch (err) {
		t.is('Event is undefined', err);
	}
});