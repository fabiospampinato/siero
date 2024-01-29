
/* MAIN */

type Constructor<T, U extends unknown[] = []> = { new ( ...args: U ): T };

type Disposer = () => void;

type DeserializeOptions = { realm?: string };
type SerializeOptions = { realm?: string };

type PromiseResolve<T> = ( value: T | PromiseLike<T> ) => void;
type PromiseReject = ( error?: unknown ) => void;
type PromiseWithResolvers<T> = { promise: Promise<T>, resolve: PromiseResolve<T>, reject: PromiseReject };

type Siero = import ( './siero' ).default;
type SieroInstance = InstanceType<typeof import ( './siero' ).default>;

type Type<T = unknown> = import ( './types/type' ).default<T>;
type TypeInstance<T = unknown> = InstanceType<typeof import ( './types/type' ).default<T>>;

type BigIntTypedArray = BigInt64Array | BigUint64Array;
type NumberTypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
type TypedArray = BigIntTypedArray | NumberTypedArray;

/* EXPORT */

export type {Constructor, Disposer, DeserializeOptions, PromiseWithResolvers, PromiseReject, PromiseResolve, SerializeOptions, Siero, SieroInstance, Type, TypeInstance, BigIntTypedArray, NumberTypedArray, TypedArray};
