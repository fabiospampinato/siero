
/* MAIN */

const arrayMap = <T, R> ( values: T[], iterator: ( value: T, index: number, arr: T[] ) => R ): R[] => { // Handling holey arrays also

  const mapped: R[] = new Array ( values.length );

  for ( let i = 0, l = values.length; i < l; i++ ) {

    mapped[i] = iterator ( values[i], i, values );

  }

  return mapped;

};

const castArray = <T> ( value: T | T[] ): T[] => {

  return Array.isArray ( value ) ? value : [value];

};

const getRandomId = (): string => {

  return Math.random ().toString ( 36 ).slice ( 2 ).slice ( 0, 12 ).padStart ( 12, '0' );

};

const mapGetOrSet = <K, V> ( map: Map<K, V>, key: K, getValue: () => V ): V => {

  const existing = map.get ( key );

  if ( existing || map.has ( key ) ) return existing!;

  const value = getValue ();

  map.set ( key, value );

  return value;

};

const noop = (): void => {

  return;

};

const promiseWithResolvers = <T> () => {

  let resolve: (( value: T | PromiseLike<T> ) => void) = noop;
  let reject: (( reason?: unknown ) => void) = noop;

  const promise = new Promise<T> ( ( res, rej ): void => {
    resolve = res;
    reject = rej;
  });

  return {promise, resolve, reject};

};

/* EXPORT */

export {arrayMap, castArray, getRandomId, mapGetOrSet, noop, promiseWithResolvers};
