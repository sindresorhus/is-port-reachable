import {expectType} from 'tsd';
import isPortReachable = require('.');

expectType<boolean>(isPortReachable(3000));
