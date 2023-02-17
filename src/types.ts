import { IsCertainlyInteger } from "./typeUtils.js";

export type ReadonlyArrayExactLength<T, N extends number> = N extends number
  ? number extends N
    ? readonly T[]
    : IsCertainlyInteger<N> extends true
    ? ReadonlyArrayExactLengthRec<T, N, readonly []>
    : readonly T[]
  : never;

type ReadonlyArrayExactLengthRec<
  T,
  L extends number,
  Result extends readonly T[],
> = Result["length"] extends L
  ? Result
  : ReadonlyArrayExactLengthRec<T, L, readonly [T, ...Result]>;

export type ReadonlyArrayMinLength<T, N extends number> = N extends number
  ? number extends N
    ? readonly T[]
    : IsCertainlyInteger<N> extends true
    ? ReadonlyArrayMinLengthRec<T, N, [], readonly T[]>
    : readonly T[]
  : never;

type ReadonlyArrayMinLengthRec<
  T,
  L extends number,
  Counter extends readonly unknown[],
  Result extends readonly T[],
> = Counter["length"] extends L
  ? Result
  : ReadonlyArrayMinLengthRec<
      T,
      L,
      [unknown, ...Counter],
      readonly [T, ...Result]
    >;
