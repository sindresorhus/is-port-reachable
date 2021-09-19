import process from 'node:process';
import test from 'ava';
import isPortReachable from './index.js';

if (!('CI' in process.env)) {
	test('ip', async t => {
		t.true(await isPortReachable(80, {host: '142.250.199.46'})); // 142.250.199.46 === google.com
	});
}

test('domain', async t => {
	t.true(await isPortReachable(80, {host: 'google.com'}));
});

test('domain - alternative port', async t => {
	t.false(await isPortReachable(8000, {host: 'google.com'}));
});

test('domain - with subdomain', async t => {
	t.true(await isPortReachable(80, {host: 'blog.sindresorhus.com'}));
});

test('fail', async t => {
	t.false(await isPortReachable(0, {host: 'localhost'}));
	await t.throwsAsync(isPortReachable(80), {message: 'Specify a `host`'});
});
