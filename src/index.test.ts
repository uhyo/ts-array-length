import { describe, expect, it } from "vitest";
import { hasLength, hasMinLength, isNonEmpty } from "./index.js";

describe("hasLength", () => {
  it("Returns true if array has given length", () => {
    expect(hasLength([], 0)).toBe(true);
    expect(hasLength([], -0)).toBe(true);

    expect(hasLength([1, 2, 3], 3)).toBe(true);
  });
  it("Returns false if array does not have given length", () => {
    expect(hasLength([], 5)).toBe(false);
    expect(hasLength([], -1)).toBe(false);
    expect(hasLength([], 0.5)).toBe(false);

    expect(hasLength([1, 2, 3], 0)).toBe(false);
  });
});

describe("hasMinLength", () => {
  it("Returns true if array has or is longer than given length", () => {
    expect(hasMinLength([], 0)).toBe(true);
    expect(hasMinLength([], -0)).toBe(true);
    expect(hasMinLength([], -1)).toBe(true);

    expect(hasMinLength([1, 2, 3], 0)).toBe(true);
    expect(hasMinLength([1, 2, 3], 1)).toBe(true);
    expect(hasMinLength([1, 2, 3], 2)).toBe(true);
    expect(hasMinLength([1, 2, 3], 3)).toBe(true);
  });
  it("Returns false if array is shorter than given length", () => {
    expect(hasMinLength([], 5)).toBe(false);
    expect(hasMinLength([], 1)).toBe(false);
    expect(hasMinLength([], 0.5)).toBe(false);

    expect(hasMinLength([1, 2, 3], 4)).toBe(false);
    expect(hasMinLength([1, 2, 3], 10)).toBe(false);
  });
});

describe("isNonEmpty", () => {
  it("Returns true if given array is not empty", () => {
    expect(isNonEmpty([1, 2, 3])).toBe(true);
    expect(isNonEmpty([1])).toBe(true);
    expect(isNonEmpty([,])).toBe(true);
  });
  it("Returns false if array is empty", () => {
    expect(isNonEmpty([])).toBe(false);
  });
});
