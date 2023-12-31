
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

const {serialize, deserialize} = new Siero ();

/* EXPORT */

export {serialize, deserialize};
