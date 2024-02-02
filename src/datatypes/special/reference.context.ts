
/* MAIN */

class ReferenceContext {

  /* VARIABLES */

  referenceCounter: number = 0;
  value2reference: Map<unknown, number> = new Map ();
  reference2value: unknown[] = [];

};

/* EXPORT */

export default ReferenceContext;
