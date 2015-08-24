'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.plan(4);

	fn(80, {host: '216.58.217.142'}, function (_, reachable) {
		t.assert(reachable);
	});

	fn(80, {host: 'google.com'}, function (_, reachable) {
		t.assert(reachable);
	});

	fn(8000, {host: 'google.com'}, function (_, reachable) {
		t.assert(!reachable);
	});

	fn(0, function (_, reachable) {
		t.assert(!reachable);
	});
});
