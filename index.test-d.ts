import {expectType} from 'tsd';
import isPortReachable = require('.');

expectType<boolean>(await isPortReachable(3000));
