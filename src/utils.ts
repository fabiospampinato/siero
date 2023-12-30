
/* MAIN */

const castArray = <T> ( value: T | T[] ): T[] => {

  return Array.isArray ( value ) ? value : [value];

};

const map = <T, R> ( values: T[], iterator: ( value: T, index: number, arr: T[] ) => R ): R[] => { // Handling holey arrays also

  const mapped: R[] = new Array ( values.length );

  for ( let i = 0, l = values.length; i < l; i++ ) {

    mapped[i] = iterator ( values[i], i, values );

  }

  return mapped;

};

/* EXPORT */

export {castArray, map};
