import { describe, it, assertType } from "vitest";
import { hasLength, hasMinLength, isNonEmpty } from "./index.js";

function getArr<T>(): readonly T[] {
  return [];
}

describe("hasLength", () => {
  it("hasLength(0) narrows arr to an empty tuple type", () => {
    const arr = getArr<number>();

    if (hasLength(arr, 0)) {
      assertType<readonly []>(arr);
    } else {
      assertType<readonly number[]>(arr);
    }
  });
  it("hasLength(2) narrows arr to a 2-tuple type", () => {
    const arr = getArr<number>();

    if (hasLength(arr, 2)) {
      assertType<readonly [number, number]>(arr);
      // @ts-expect-error
      arr[2];
    } else {
      assertType<readonly number[]>(arr);
    }
  });
});

describe("hasMinLength", () => {
  it("hasMinLength(0) does nothing", () => {
    const arr = getArr<number>();

    if (hasMinLength(arr, 0)) {
      assertType<readonly number[]>(arr);
    } else {
      assertType<never>(arr);
    }
  });
  it("hasMinLength(2) narrows arr to a 2-tuple type with rest elements", () => {
    const arr = getArr<number>();

    if (hasMinLength(arr, 2)) {
      assertType<readonly [number, number, ...number[]]>(arr);
      assertType<number>(arr[0]);
      assertType<number>(arr[1]);
      assertType<number | undefined>(arr[2]);
      assertType<number | undefined>(arr[3]);
    } else {
      assertType<readonly number[]>(arr);
    }
  });
});

describe("isNonEmpty", () => {
  it("isNonEmpty() narrows arr to a 1-tuple with rest elements", () => {
    const arr = getArr<number>();

    if (isNonEmpty(arr)) {
      assertType<readonly [number, ...number[]]>(arr);
    } else {
      assertType<readonly number[]>(arr);
    }
  });
});
