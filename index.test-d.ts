import {expectType} from 'tsd';
import isPortReachable from './index.js';

expectType<Promise<boolean>>(isPortReachable(3000, {host: 'localhost'}));
