import * as os from 'os';
import pkg from '../../package.json';
import { Config } from '../configure/config';

export const DEFAULT_UA = `${Config.USER_AGENT_PREFIX} (${os.platform()}; ${os.arch()}) ` +
    `Node.js/${process.version} Core/${pkg.version}`;

export const DEFAULT_CLIENT = `Node.js(${process.version}), ${pkg.name}: ${pkg.version}`;
