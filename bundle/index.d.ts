import Siero from '../dist/siero';
declare const __module: () => { default: typeof Siero; };
declare const call: (command: string, args: unknown[]) => void;
declare const register: (realm: string, handler: (command: string, args: string) => void) => import("../dist/types").Disposer;
declare const serialize: (value: unknown, options?: import("../dist/types").SerializeOptions) => string;
declare const deserialize: (value: string, options?: import("../dist/types").DeserializeOptions) => unknown;
export { __module, call, register, serialize, deserialize };
