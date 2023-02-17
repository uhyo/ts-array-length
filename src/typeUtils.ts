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
