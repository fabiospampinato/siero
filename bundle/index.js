
/* IMPORT */

import __module from './siero.js';

/* MAIN */

const Siero = __module ().default;
const {call, register, serialize, deserialize} = new Siero ();

/* EXPORT */

export {__module, call, register, serialize, deserialize};
