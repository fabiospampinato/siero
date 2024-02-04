
/* IMPORT */

import __module from './siero.js';

/* MAIN */

const Siero = __module ().default;
const {realm, call, register, serialize, deserialize} = new Siero ();

/* EXPORT */

export {__module, realm, call, register, serialize, deserialize};
