# Siero

A serialization library that can handle functions, promises and symbols too.

In general arbitrary functions/promises/symbols can't be transferred between workers/processes/VMs, but this library enables you to do the next best thing: by having the two execution contexts communicate with each other you can write code as if functions/promises/symbols got actually transferred between them.

Check out [`siero-worker`](https://github.com/fabiospampinato/siero-worker) for an opinionated way to spawn a worker that you can talk to via Siero.

## Limitations

- Symbol properties are only preserved if attached to plain objects.
- Arbitrary custom properties are also only preserved if attached to plain objects.
- Prevent-extension/sealed/frozen flags are also only preserved for plain objects.
- Custom configurable/enumerable/writable flags for properties are not preserved at all.
- Getter/setter properties are not preserved as functions, they will instead be resolved.
- For error objects only the `name`, `message`, `stack`, `cause` and `errors` properties are preserved.
- The specific type of function constructor (regular, arrow, async etc.) is not preserved.
- Deserialized functions will always return a Promise, even if the original function didn't.
- Generators and async generators are not currently serializable.

## Install

```sh
npm install --save siero
```

## Supported Types

| Primitives       | Boxed Primitives | Errors                 | Typed Arrays              | Others              |
| ---------------- | ---------------- | ---------------------- | ------------------------- | ------------------- |
| [`BigInt`][0]    | [`BigInt`][0]    | [`Error`][6]           | [`BigInt64Array`][13]     | [`Array`][24]       |
| [`Boolean`][1]   | [`Boolean`][1]   | [`EvalError`][7]       | [`BigUint64Array`][14]    | [`ArrayBuffer`][25] |
| [`Null`][2]      | [`Number`][3]    | [`RangeError`][8]      | [`Float32Array`][15]      | [`DataView`][34]    |
| [`Number`][3]    | [`String`][4]    | [`ReferenceError`][9]  | [`Float64Array`][16]      | [`Date`][26]        |
| [`String`][4]    | [`Symbol`][31]   | [`SyntaxError`][10]    | [`Int8Array`][17]         | [`Function`][32]    |
| [`Symbol`][31]   |                  | [`TypeError`][11]      | [`Int16Array`][18]        | [`Promise`][33]     |
| [`Undefined`][5] |                  | [`URIError`][12]       | [`Int32Array`][19]        | [`RegExp`][27]      |
|                  |                  | [`AggregateError`][35] | [`Uint8Array`][20]        | [`Map`][28]         |
|                  |                  |                        | [`Uint16Array`][21]       | [`Set`][29]         |
|                  |                  |                        | [`Uint32Array`][22]       | [`PlainObject`][30] |
|                  |                  |                        | [`Uint8ClampedArray`][23] |                     |

[0]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined
[31]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
[11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError
[35]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError

[13]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array
[14]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array
[15]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
[16]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
[17]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
[18]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
[19]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array
[20]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[21]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array
[22]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
[23]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray

[24]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[25]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[26]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[27]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[28]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[29]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[30]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[32]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
[33]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[34]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

## Usage

```ts
import {serialize, deserialize} from 'siero';

// Let's serialize a supported value

const value = { whatever: 123 }; // Any supported value
const serialized = serialize ( value );

// Let's deserialize it

const deserialized = deserialize ( serialized );
```

## License

MIT © Fabio Spampinato
