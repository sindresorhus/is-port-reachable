import test from 'ava';
import m from './';

test('ip', t => {
	m(80, {host: '216.58.217.142'}, (_, reachable) => {
		t.true(reachable);
	});
});

test('domain', t => {
	m(80, {host: 'google.com'}, (_, reachable) => {
		t.true(reachable);
	});
});

test('domain - alternative port', t => {
	m(8000, {host: 'google.com'}, (_, reachable) => {
		t.false(reachable);
	});
});

test('fail', t => {
	m(0, (_, reachable) => {
		t.false(reachable);
	});
});
