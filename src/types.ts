
export type ReadonlyArrayExactLength<T, N extends number> = ReadonlyArrayExactLengthRec<T, N, readonly []>;

type ReadonlyArrayExactLengthRec<
  T,
  L extends number,
  Result extends readonly T[]
> = Result['length'] extends L ? Result : ReadonlyArrayExactLengthRec<T, L, readonly [T, ...Result]>;

export type ReadonlyArrayMinLength<T, N extends number> = ReadonlyArrayMinLengthRec<T, N, [], readonly T[]>;

type ReadonlyArrayMinLengthRec<
  T,
  L extends number,
  Counter extends readonly unknown[],
  Result extends readonly T[]
> = Counter['length'] extends L ? Result : ReadonlyArrayMinLengthRec<T, L, [unknown, ...Counter], [T, ...Result]>;
