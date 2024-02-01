
/* MAIN */

class ReferenceContext {

  /* VARIABLES */

  referenceCounter: number = 1;
  value2reference: Map<unknown, string> = new Map ();
  reference2value: Map<string, unknown> = new Map ();

};

/* EXPORT */

export default ReferenceContext;
