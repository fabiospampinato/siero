
/* IMPORT */

import Addon from './addon';
import type {PromiseWithResolvers} from '../types';

/* MAIN */

class Contexts extends Addon {

  /* VARIABLES */

  functionCounter: number = 1;
  functionResultCounter: number = 1;
  function2id: Map<Function, string> = new Map ();
  id2function: Partial<Record<string, Function>> = {};
  id2functionResult: Partial<Record<string, PromiseWithResolvers<unknown>>> = {};

  promiseCounter: number = 1;
  promise2id: Map<Promise<unknown>, string> = new Map ();
  id2promise: Partial<Record<string, PromiseWithResolvers<unknown>>> = {};
  id2promiseRealms: Partial<Record<string, Set<string>>> = {};

  symbolCounter: number = 1;
  symbol2id: Partial<Record<symbol, string>> = {};
  id2symbol: Partial<Record<string, symbol>> = {};

}

/* EXPORT */

export default Contexts;
