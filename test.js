import test from 'ava';
import isPortReachable from '.';

test('ip', async t => {
	t.true(await isPortReachable(80, {host: '216.58.217.142'}));
});

test('domain', async t => {
	t.true(await isPortReachable(80, {host: 'google.com'}));
});

test('domain - alternative port', async t => {
	t.false(await isPortReachable(8000, {host: 'google.com'}));
});

test('fail', async t => {
	t.false(await isPortReachable(0));
});
