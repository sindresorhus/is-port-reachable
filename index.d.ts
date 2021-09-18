declare function isPortReachable(port: number, opts?: {timeout: number, host: string}): Promise<boolean>;
export default isPortReachable;
