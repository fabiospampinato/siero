
/* IMPORT */

import __module from './siero.js';

/* MAIN */

const Siero = __module ().default;
const siero = new Siero ();
const {serialize, deserialize} = siero;
const __internals = siero;

/* EXPORT */

export {__module, __internals, serialize, deserialize};
