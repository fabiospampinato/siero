
/* IMPORT */

import {serialize} from '../bundle/index.js';
import {RICH_DESERIALIZABLE} from './fixtures.js';

/* MAIN */

console.log ( serialize ( RICH_DESERIALIZABLE ).length );
