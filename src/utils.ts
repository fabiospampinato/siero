
/* MAIN */

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

const resolve = ( fn: Function | undefined, args: unknown[], callback: ( positive: boolean, result: unknown ) => void ): void => {

  if ( !fn ) {

    callback ( false, new ReferenceError ( 'function is not found' ) );

  } else {

    try {

      const result = fn ( ...args );

      if ( result instanceof Promise ) {

        const onResolve = ( result: unknown ) => callback ( true, result );
        const onReject = ( error: unknown ) => callback ( false, error );

        result.then ( onResolve, onReject );

      } else {

        callback ( true, result );

      }

    } catch ( error: unknown ) {

      callback ( false, error );

    }

  }

};

/* EXPORT */

export {castArray, getRandomId, mapGetOrSet, noop, promiseWithResolvers, resolve};
