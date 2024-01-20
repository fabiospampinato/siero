
/* IMPORT */

import Addon from './addon';

/* MAIN */

class Contexts extends Addon {

  /* VARIABLES */

  symbolCounter: number = 1;
  realm2symbol2id: Partial<Record<string, Partial<Record<symbol, string>>>> = {};
  realm2id2symbol: Partial<Record<string, Partial<Record<string, symbol>>>> = {};

}

/* EXPORT */

export default Contexts;
