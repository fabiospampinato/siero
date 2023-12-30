
/* IMPORT */

import Siero from './siero';

/* MAIN */

//TODO: Maybe preserve holes in arrays
//TODO: Maybe make types fully configurable, or at least extendable
//TODO: Maybe preserve arrow/normal/async functions
//TODO: Maybe preserve configurable/enumerable flags
//TODO: Maybe preserve symbol properties

//TODO: Support null-prototype objects
//TODO: Support AggregateError
//TODO: Support boxed primitive
//TODO: Support DataView
//TODO: Support Function
//TODO: Support Promise
//TODO: Support Symbol

const {serialize, deserialize} = new Siero ();

/* EXPORT */

export {serialize, deserialize};
