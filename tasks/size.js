
/* IMPORT */

import {serialize} from '../bundle/index.js';
import {RICH_SERIALIZABLE} from './fixtures.js';

/* HELPERS */

const SERIALIZABLE = { ...RICH_SERIALIZABLE, stringLong: undefined };

/* MAIN */

console.log ( serialize ( SERIALIZABLE ).length );
console.log ( serialize ( SERIALIZABLE ) );
