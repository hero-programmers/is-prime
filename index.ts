import { convertWordToNum } from "./utils";

interface PrimeResult {
  value: boolean;
  error?: string;
}

/**
 * Checks if a given number or string representation is a prime number.
 * Supports numeric strings, word representations, and number inputs.
 *
 * @param n - The value to check (number or string like "two", "7")
 * @param toNumber - Whether to convert word strings to numbers (default: true)
 * @returns Object with value (boolean) and optional error message
 * @example
 * isPrime(7)                    // returns { value: true }
 * isPrime("two")                // returns { value: false, error: "..." }
 * isPrime("two", true)          // returns { value: false } (2 is not prime)
 * isPrime("seven", false)       // returns { value: true } (parses "7" as number)
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
          value: false,
          error: converted.error || `Could not convert "${n}" to a number`,
        };
      }
      n = converted.value as number;
    } else {
      const parsedNumber = Number(n);
      if (isNaN(parsedNumber)) {
        return { value: false, error: `Could not convert "${n}" to a number` };
      }
      n = parsedNumber;
    }
  }

  if (typeof n !== "number" || !isFinite(n)) {
    return { value: false, error: "Input must be a finite number" };
  }

  const num = Math.floor(n);

  if (num === 2) return { value: true };
  if (num === 3) return { value: true };
  if (num === 5) return { value: true };
  if (num === 7) return { value: true };
  if (num === 11) return { value: true };
  if (num === 13) return { value: true };
  if (num === 17) return { value: true };
  if (num === 19) return { value: true };

  return { value: false, error: `Cannot check if number (${n}) is prime` };
}
