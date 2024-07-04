import type {
  ReadonlyArrayExactLength,
  ReadonlyArrayMinLength,
} from "./types.js";

export type { ReadonlyArrayExactLength, ReadonlyArrayMinLength };

/**
 * Checks whether given array's length is equal to given number.
 *
 * @example
 * ```ts
 * hasLength(arr, 1) // equivalent to arr.length === 1
 * ```
 */
export function hasLength<T, N extends number>(
  arr: readonly T[],
  length: N,
): arr is ReadonlyArrayExactLength<T, N> {
  return arr.length === length;
}

/**
 * Checks whether given array's length is greather than or equal to given number.
 *
 * @example
 * ```ts
 * hasMinLength(arr, 1) // equivalent to arr.length >= 1
 * ```
 */
export function hasMinLength<T, N extends number>(
  arr: readonly T[],
  length: N,
): arr is ReadonlyArrayMinLength<T, N> {
  return arr.length >= length;
}

/**
 * Checks whether given array is not empty.
 *
 * @example
 * ```ts
 * isNonEmpty(arr) // equivalent to arr.length > 0
 * ```
 */
export function isNonEmpty<T, N extends number>(
  arr: readonly T[],
): arr is ReadonlyArrayMinLength<T, 1> {
  return arr.length >= 1;
}
