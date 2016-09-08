'use strict';
const net = require('net');

module.exports = (port, opts) => {
	opts = Object.assign({timeout: 1000}, opts);

	return new Promise((resolve => {
		const socket = new net.Socket();

		const onError = () => {
			socket.destroy();
			resolve(false);
		};

		socket.setTimeout(opts.timeout);
		socket.on('error', onError);
		socket.on('timeout', onError);

		socket.connect(port, opts.host, () => {
			socket.end();
			resolve(true);
		});
	}));
};
