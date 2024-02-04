
/* IMPORT */

import Siero from './siero';

/* MAIN */

const __module = () => ({ default: Siero });
const {call, register, serialize, deserialize} = new Siero ();

/* EXPORT */

export {__module, call, register, serialize, deserialize};
