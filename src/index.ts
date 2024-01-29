
/* IMPORT */

import Siero from './siero';

/* MAIN */

//TODO: Maybe make the supported types fully configurable, or at least extendable
//TODO: Maybe preserve normal/arrow/async function constructors
//TODO: Maybe preserve configurable/enumerable/writable flags
//TODO: Maybe preserve holes in arrays

//TODO: Support AggregateError
//TODO: Support DataView
//TODO: Support Function
//TODO: Support Promise

//TODO: Support cyclic references
//TODO: memoizeOne root serialize() calls, for when the same value is passed to multiple workers, benchmark this

const siero = new Siero ();
const {serialize, deserialize} = siero;
const __internals = siero;

/* EXPORT */

export {__internals, serialize, deserialize};
