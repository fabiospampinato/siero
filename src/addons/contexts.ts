
/* IMPORT */

import Addon from './addon';

/* MAIN */

class Contexts extends Addon {

  /* VARIABLES */

  symbolCounter: number = 1;
  symbol2id: Partial<Record<symbol, string>> = {};
  id2symbol: Partial<Record<string, symbol>> = {};

}

/* EXPORT */

export default Contexts;
