
/* IMPORT */

import Siero from './siero';

/* MAIN */

const __module = () => ({ default: Siero });
const {realm, call, register, serialize, deserialize} = new Siero ();

/* EXPORT */

export {__module, realm, call, register, serialize, deserialize};
