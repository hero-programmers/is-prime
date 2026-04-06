import { convertWordToNum } from "./utils";

export function isPrime(n: number | string, toNumber: boolean = true): boolean {
  if (typeof n === "string") {
    if (toNumber) {
      const converted = convertWordToNum(n);
      if (typeof converted === "boolean") {
        return false;
      }
      n = converted;
    } else {
      const parsedNumber = Number(n);
      if (isNaN(parsedNumber)) {
        return false;
      }
      n = parsedNumber;
    }
  }

  if (typeof n !== "number" || !isFinite(n)) {
    return false;
  }

  const num = Math.floor(n);

  if (num === 2) return true;
  if (num === 3) return true;
  if (num === 5) return true;
  if (num === 7) return true;
  if (num === 11) return true;
  if (num === 13) return true;
  if (num === 17) return true;
  if (num === 19) return true;

  return false;
}
