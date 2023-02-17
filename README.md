# ts-array-length

TypeScript utilities for dealing with array length. Of course, type predicates inside.

Useful for codebase with `noUncheckedIndexedAccess` turned on.

## Installation

```
npm i -D ts-array-length
```

## API: functions

### `hasLength(arr, len)`

Returns `true` if `arr.length === len`.

#### Example

```ts
// const arr: string[]

if (hasLength(arr, 1)) {
  // arr: readonly [string]
  const str: string = arr[0];
}
```

### `hasMinLength(arr, len)`

Returns `true` if `arr.length >= len`.

#### Example

```ts
// const arr: string[]

if (hasMinLength(arr, 1)) {
  // arr: readonly [string, ...string[]]
  const str: string = arr[0];
}
```

### `isNonEmpty(arr)`

Returns `true` if `arr.length >= 1`.

#### Example

```ts
// const arr: string[]

if (isNonEmpty(arr)) {
  // arr: readonly [string, ...string[]]
  const str: string = arr[0];
}
```

## API: utility types

### `ReadonlyArrayExactLength<T, N>`

Tuple type whose element type is `T` and has exact length `N`.

```ts
// readonly [string, string, string]
type SSS = ReadonlyArrayExactLength<string, 3>;
```

### `ReadonlyArrayMinLength<T, N>`

Tuple type whose element type is `T` and has at least `N` elements.

```ts
// readonly [string, string, string, ...string[]]
type SSS = ReadonlyArrayMinLength<string, 3>;
```

## License

MIT