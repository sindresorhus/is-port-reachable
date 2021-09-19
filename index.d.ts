interface Options {
	/**
	Milliseconds to wait before giving up.

	@default 1000
	*/
	timeout?: number;

	/**
	Can be a domain or an IP.

	@default 'localhost'
	*/
	host?: string;
}

/**
Check if a local or remote port is reachable.

@example
```
import isPortReachable from 'is-port-reachable';

if(await isPortReachable(3000)) {
	// start server
}
```
*/
declare function isPortReachable(port: number, options?: Options): Promise<boolean>;

export = isPortReachable;
