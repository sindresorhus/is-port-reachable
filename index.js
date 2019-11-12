'use strict';
const net = require('net');

module.exports = async (port, {timeout = 1000, host} = {}) => {
	const promise = new Promise(((resolve, reject) => {
		const socket = new net.Socket();

		const onError = () => {
			socket.destroy();
			reject();
		};

		socket.setTimeout(timeout);
		socket.once('error', onError);
		socket.once('timeout', onError);

		socket.connect(port, host, () => {
			socket.end();
			resolve();
		});
	}));

	try {
		await promise;
		return true;
	} catch (_) {
		return false;
	}
};
