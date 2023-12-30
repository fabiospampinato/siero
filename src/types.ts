
/* MAIN */

type Constructor<T, U extends unknown[] = []> = { new ( ...args: U ): T };

type Type<T = unknown> = import ( './types/type' ).default<T>;
type TypeInstance<T = unknown> = InstanceType<typeof import ( './types/type' ).default<T>>;

type Siero = import ( './index' ).default;
type SieroInstance = InstanceType<typeof import ( './index' ).default>;

type BigIntTypedArray = BigInt64Array | BigUint64Array;
type NumberTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
type TypedArray = BigIntTypedArray | NumberTypedArray;

/* EXPORT */

export type {Constructor, Type, TypeInstance, Siero, SieroInstance, BigIntTypedArray, NumberTypedArray, TypedArray};
