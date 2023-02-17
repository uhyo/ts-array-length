export type IsNever<T> = [T] extends [never] ? true : false;

export type FilterCertainIntegers<N extends number> = N extends number
  ? IsCertainlyInteger<N> extends true
    ? N
    : never
  : never;

export type IsCertainlyInteger<N extends number> =
  IsCertainlyIntegerImpl<`${N}`>;

type IsCertainlyIntegerImpl<Str extends string> =
  Str extends `${infer _}.${infer _}`
    ? false
    : Str extends `-${infer _}`
    ? false
    : Str extends "Infinity" | "-Infinity" | "NaN"
    ? false
    : true;
