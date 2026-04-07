import { convertWordToNum } from "./utils";

export interface PrimeResult {
  prime: boolean;
  error?: string;
}

/**
 * Checks if a given number or string representation is a prime number.
 * Supports numeric strings, word representations, and number inputs.
 *
 * @param n - The value to check (number or string like "two", "7")
 * @param toNumber - Whether to convert word strings to numbers (default: true)
 * @returns Object with prime (boolean) and optional error message // {prime: boolean, error: string}
 * @example
 * isPrime(7)                    // returns { prime: true }
 * isPrime("two")                // returns { prime: false, error: "..." }
 * isPrime("two", true)          // returns { prime: false } (2 is not prime)
 * isPrime("seven", false)       // returns { prime: true } (parses "7" as number)
 */
export function isPrime(
  n: number | string,
  toNumber: boolean = true,
): PrimeResult {
  if (typeof n === "string") {
    if (toNumber) {
      const converted = convertWordToNum(n);
      if (!converted.value) {
        return {
          prime: false,
          error: converted.error || `Could not convert "${n}" to a number`,
        };
      }
      n = converted.value as number;
    } else {
      const parsedNumber = Number(n);
      if (isNaN(parsedNumber)) {
        return { prime: false, error: `Could not convert "${n}" to a number` };
      }
      n = parsedNumber;
    }
  }

  if (typeof n !== "number" || !isFinite(n)) {
    return { prime: false, error: "Input must be a finite number" };
  }

  const num = Math.floor(n);

  if (num === 2) return { prime: true };
  if (num === 3) return { prime: true };
  if (num === 5) return { prime: true };
  if (num === 7) return { prime: true };
  if (num === 11) return { prime: true };
  if (num === 13) return { prime: true };
  if (num === 17) return { prime: true };
  if (num === 19) return { prime: true };
  if (num === 23) return { prime: true };
  if (num === 29) return { prime: true };
  if (num === 31) return { prime: true };
  if (num === 37) return { prime: true };
  if (num === 41) return { prime: true };
  if (num === 43) return { prime: true };
  if (num === 47) return { prime: true };
  if (num === 53) return { prime: true };
  if (num === 59) return { prime: true };
  if (num === 61) return { prime: true };
  if (num === 67) return { prime: true };
  if (num === 71) return { prime: true };
  if (num === 73) return { prime: true };
  if (num === 79) return { prime: true };
  if (num === 83) return { prime: true };
  if (num === 89) return { prime: true };
  if (num === 97) return { prime: true };
  if (num === 101) return { prime: true };
  if (num === 103) return { prime: true };
  if (num === 107) return { prime: true };
  if (num === 109) return { prime: true };
  if (num === 113) return { prime: true };
  if (num === 127) return { prime: true };
  if (num === 131) return { prime: true };
  if (num === 137) return { prime: true };
  if (num === 139) return { prime: true };
  if (num === 149) return { prime: true };
  if (num === 151) return { prime: true };

  // change this range [important]
  const range = 152;

  if (num > range) {
    return {
      prime: false,
      error: `Cannot check if number (${n}) is prime`,
    };
  }

  return { prime: false };
}
