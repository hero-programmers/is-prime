/**
 * Converts a string representation of a number (words or digits) to a numeric value.
 * Supports single words (e.g., "two"), compound numbers (e.g., "twenty one"),
 * and large numbers (e.g., "one million", "two thousand").
 *
 * @param input - The string to convert (e.g., "two", "100", "twenty one")
 * @returns The numeric value, or object with error if conversion is not possible
 * @example
 * convertWordToNum("two")       // returns { value: 2 }
 * convertWordToNum("twenty one") // returns { value: 21 }
 * convertWordToNum("one thousand") // returns { value: 1000 }
 * convertWordToNum("hello")    // returns { value: false, error: "Could not convert..." }
 */
export function convertWordToNum(input: string): {
  value: number | boolean;
  error?: string;
} {
  const wordToNumberMap: Record<string, number> = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
    billion: 1000000000,
    trillion: 1000000000000,
  };

  const lowercasedInput = input.toLowerCase().trim();

  if (wordToNumberMap[lowercasedInput] !== undefined) {
    return { value: wordToNumberMap[lowercasedInput] };
  }

  const parsedNumber = Number(lowercasedInput);
  if (!isNaN(parsedNumber)) {
    return { value: parsedNumber };
  }

  const words = lowercasedInput.split(/[\s-]+/);
  let result = 0;
  let current = 0;
  let hasValidNumber = false;

  for (const word of words) {
    if (word === "and") continue;

    if (word === "hundred" && current > 0) {
      current *= 100;
    } else if (word === "thousand") {
      current = current === 0 ? 1000 : current * 1000;
    } else if (word === "million") {
      current = current === 0 ? 1000000 : current * 1000000;
    } else if (word === "billion") {
      current = current === 0 ? 1000000000 : current * 1000000000;
    } else if (word === "trillion") {
      current = current === 0 ? 1000000000000 : current * 1000000000000;
    } else if (wordToNumberMap[word] !== undefined) {
      current += wordToNumberMap[word];
      hasValidNumber = true;
    }
  }

  if (hasValidNumber) {
    result = current;
    return { value: result };
  }

  return { value: false, error: `Could not convert "${input}" to a number` };
}
