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
declare module 'is-port-reachable' {
  export interface IsPortReachableOptions {
    timeout?: number | undefined;
    host?: string;
  }
  export default function(
    port: number | undefined,
    options?: IsPortReachableOptions
  ): Promise<boolean>;
}
