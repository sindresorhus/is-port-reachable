/**
Check if a local or remote port is reachable
@example
```
import isPortReachable from 'is-port-reachable';

if(await isPortReachable(3000)) {
	// start server
}
```
*/
declare function isPortReachable(port: number, opts?: {timeout: number, host: string}): Promise<boolean>;

export default isPortReachable;
