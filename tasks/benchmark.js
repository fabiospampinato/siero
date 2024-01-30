
/* IMPORT */

import benchmark from 'benchloop';
import {serialize, deserialize} from '../bundle/index.js';
import {PLAIN_SERIALIZABLE, RICH_DESERIALIZABLE, RICH_SERIALIZABLE} from './fixtures.js';

/* MAIN */

benchmark.config ({
  iterations: 1_000
});

benchmark ({
  name: 'siero.serialize',
  fn: () => {
    serialize ( RICH_SERIALIZABLE );
  }
});

benchmark ({
  name: 'siero.deserialize',
  fn: () => {
    deserialize ( RICH_DESERIALIZABLE );
  }
});

benchmark ({
  name: 'siero.roundtrip',
  fn: () => {
    deserialize ( serialize ( PLAIN_SERIALIZABLE ) );
  }
});

benchmark ({
  iterations: 100,
  name: 'json.roundtrip',
  fn: () => {
    JSON.parse ( JSON.stringify ( PLAIN_SERIALIZABLE ) );
  }
});

benchmark ({
  name: 'structuredClone.roundtrip',
  fn: () => {
    structuredClone ( PLAIN_SERIALIZABLE );
  }
});

benchmark.summary ();
