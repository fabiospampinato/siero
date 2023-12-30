
/* IMPORT */

import benchmark from 'benchloop';
import {serialize, deserialize} from '../dist/index.js';
import {SERIALIZABLE, DESERIALIZABLE} from '../test/fixtures.js';

/* MAIN */

benchmark.config ({
  iterations: 10_000
});

// benchmark ({
//   name: 'JSON.stringify',
//   fn: () => {
//     JSON.stringify ( SERIALIZABLE );
//   }
// });

benchmark ({
  name: 'siero.serialize',
  fn: () => {
    serialize ( SERIALIZABLE );
  }
});

benchmark ({
  name: 'siero.deserialize',
  fn: () => {
    deserialize ( DESERIALIZABLE );
  }
});

benchmark.summary ();
