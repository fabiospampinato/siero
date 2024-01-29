
/* IMPORT */

import Addon from './addon';
import type {PromiseWithResolvers} from '../types';

/* MAIN */

class Contexts extends Addon {

  /* VARIABLES */

  promiseCounter: number = 1;
  promise2id: Map<Promise<unknown>, string> = new Map ();
  id2promise: Partial<Record<string, PromiseWithResolvers<unknown>>> = {};
  id2realms: Partial<Record<string, Set<string>>> = {};

  symbolCounter: number = 1;
  symbol2id: Partial<Record<symbol, string>> = {};
  id2symbol: Partial<Record<string, symbol>> = {};

}

/* EXPORT */

export default Contexts;
