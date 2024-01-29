
/* IMPORT */

import {mapGetOrSet, promiseWithResolvers} from '../utils';
import Type from './type';
import type {DeserializeOptions, SerializeOptions, SieroInstance} from '../types';

/* MAIN */

//TODO: Use WeakMaps + FinalizationRegistry, to handle the case where the promise is just garbage-collected without settling

class _Promise extends Type<Promise<unknown>> {

  /* VARIABLES */

  readonly Constructor = Promise;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero );

    this.siero.commands.register ( 'promise.settle', this.settle.bind ( this ) );

  }

  /* API */

  settle ( id: string, positive: boolean, value: unknown ): void {

    const realms = this.siero.contexts.id2realms[id];

    if ( realms ) {
      delete this.siero.contexts.id2realms[id];
      for ( const realm of realms ) {
        if ( realm === this.siero.realm ) continue;
        if ( !this.siero.realms.has ( realm ) ) continue;
        this.siero.realms.call ( realm, 'promise.settle', [id, positive, value] );
      }
    }

    const promise = this.siero.contexts.id2promise[id];

    if ( promise ) {
      delete this.siero.contexts.id2promise[id];
      this.siero.contexts.promise2id.delete ( promise.promise );
      if ( positive ) {
        promise.resolve ( value );
      } else {
        promise.reject ( value );
      }
    }

  }

  serialize ( value: Promise<unknown>, options?: SerializeOptions ): string {

    const id = mapGetOrSet ( this.siero.contexts.promise2id, value, () => `${this.siero.realm}-${this.siero.contexts.promiseCounter++}` );
    const listened = ( id in this.siero.contexts.id2promise );
    const promise = ( this.siero.contexts.id2promise[id] ||= promiseWithResolvers () );

    if ( options?.realm ) {
      const realms = ( this.siero.contexts.id2realms[id] ||= new Set () );
      realms.add ( options.realm );
    }

    if ( !listened ) { //TODO: Handle passing the deserialized promise to somebody else again
      const onResolve = ( value: unknown ) => this.settle ( id, true, value );
      const onReject = ( error: unknown ) => this.settle ( id, false, error );
      value.then ( onResolve, onReject );
    }

    return id;

  }

  deserialize ( value: string, options?: DeserializeOptions ): Promise<unknown> {

    const promise = ( this.siero.contexts.id2promise[value] ||= promiseWithResolvers () );
    const id = mapGetOrSet ( this.siero.contexts.promise2id, promise.promise, () => value );

    return promise.promise;

  }

}

/* EXPORT */

export default _Promise;
