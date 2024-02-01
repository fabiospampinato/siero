
/* IMPORT */

import Siero from './siero';

/* MAIN */

//TODO: Support AggregateError
//TODO: Support DataView

//TODO: Support cyclic references
//TODO: memoizeOne root serialize() calls, for when the same value is passed to multiple workers, benchmark this

const __module = () => ({ default: Siero });
const siero = new Siero ();
const {serialize, deserialize} = siero;
const __internals = siero;

/* EXPORT */

export {__module, __internals, serialize, deserialize};
