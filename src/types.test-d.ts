import { expectTypeOf, describe, it } from "vitest";
import { hasLength, hasMinLength } from "./index.js";
import { ReadonlyArrayExactLength, ReadonlyArrayMinLength } from "./types.js";

describe("ReadonlyArrayExactLength", () => {
  it("When a non-negative integer literal number type is given, it works", () => {
    expectTypeOf<ReadonlyArrayExactLength<string, 0>>().toEqualTypeOf<
      readonly []
    >();
    expectTypeOf<ReadonlyArrayExactLength<string, 1>>().toEqualTypeOf<
      readonly [string]
    >();
    expectTypeOf<ReadonlyArrayExactLength<string, 1>>().not.toEqualTypeOf<
      readonly [string, ...string[]]
    >();
  });

  it("It works for a union of literal number types", () => {
    expectTypeOf<ReadonlyArrayExactLength<string, 1 | 2 | 3>>().toEqualTypeOf<
      | readonly [string]
      | readonly [string, string]
      | readonly [string, string, string]
    >();
  });

  it("When a negative or non-integer literal number is given, it gives up and falls back to normal array type", () => {
    expectTypeOf<ReadonlyArrayExactLength<boolean, -1>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayExactLength<boolean, 3.14>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayExactLength<boolean, 1e900>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayExactLength<boolean, -1e900>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayExactLength<boolean, 5 | -0.5>>().toEqualTypeOf<
      | readonly boolean[]
      | readonly [boolean, boolean, boolean, boolean, boolean]
    >();
  });

  it("When a number type is given, it returns normal array type", () => {
    expectTypeOf<ReadonlyArrayExactLength<boolean, number>>().toEqualTypeOf<
      readonly boolean[]
    >();
  });

  it("Does not complain about type parameters", () => {
    function func<N extends number>(num: N) {
      type A = ReadonlyArrayExactLength<string, N>;
      const arr = ["pika", "chu"];
      if (hasLength(arr, num)) {
        const a: A = arr;
        return a[0];
      }
      return "";
    }
  });
});

describe("ReadonlyArrayMinLength", () => {
  it("When a non-negative integer literal number type is given, it works", () => {
    expectTypeOf<ReadonlyArrayMinLength<string, 0>>().toEqualTypeOf<
      readonly string[]
    >();
    expectTypeOf<ReadonlyArrayMinLength<string, 1>>().toEqualTypeOf<
      readonly [string, ...string[]]
    >();
  });

  it("When a union of literal number types are given, the minimum is used", () => {
    expectTypeOf<ReadonlyArrayMinLength<string, 1 | 2 | 3>>().toEqualTypeOf<
      readonly [string, ...string[]]
    >();
  });

  it("When a negative or non-integer literal number is given, it gives up and falls back to normal array type", () => {
    expectTypeOf<ReadonlyArrayMinLength<boolean, -1>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayMinLength<boolean, 3.14>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayMinLength<boolean, 1e900>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayMinLength<boolean, -1e900>>().toEqualTypeOf<
      readonly boolean[]
    >();
    expectTypeOf<ReadonlyArrayMinLength<boolean, 5 | -0.5>>().toEqualTypeOf<
      readonly [boolean, boolean, boolean, boolean, boolean, ...boolean[]]
    >();
  });

  it("When a number type is given, it returns normal array type", () => {
    expectTypeOf<ReadonlyArrayMinLength<boolean, number>>().toEqualTypeOf<
      readonly boolean[]
    >();
  });

  it("Does not complain about type parameters", () => {
    function func<N extends number>(num: N) {
      type A = ReadonlyArrayMinLength<string, N>;
      const arr = ["pika", "chu"];
      if (hasMinLength(arr, num)) {
        const a: A = arr;
        return a[0];
      }
      return "";
    }
  });
});
