
/* MAIN */

class ReferenceContext {

  /* VARIABLES */

  referenceCounter: number = 1;
  value2reference: Map<object, string> = new Map ();
  reference2value: Map<string, object> = new Map ();

};

/* EXPORT */

export default ReferenceContext;
