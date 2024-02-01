
/* IMPORT */

import Siero from './siero';

/* MAIN */

//TODO: Support AggregateError
//TODO: Support DataView

const __module = () => ({ default: Siero });
const siero = new Siero ();
const {serialize, deserialize} = siero;
const __internals = siero;

/* EXPORT */

export {__module, __internals, serialize, deserialize};
