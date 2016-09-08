'use strict';
const net = require('net');

module.exports = (port, opts) => {
	opts = Object.assign({}, opts);

	const timeout = typeof opts.timeout === 'number' ? opts.timeout : 1000;
	const socket = new net.Socket();

	return new Promise((resolve => {
		const onError = () => {
			socket.destroy();
			resolve(false);
		};

		socket.setTimeout(timeout);
		socket.on('error', onError);
		socket.on('timeout', onError);

		socket.connect(port, opts.host, () => {
			socket.end();
			resolve(true);
		});
	}));
};
