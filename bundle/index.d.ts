import Siero from '../dist/siero';
declare const __module: () => { default: typeof Siero; };
declare const serialize: (value: unknown, options?: import("../dist/types").SerializeOptions | undefined) => string, deserialize: (value: string, options?: import("../dist/types").DeserializeOptions | undefined) => unknown;
declare const __internals: Siero;
export { __module, __internals, serialize, deserialize };
