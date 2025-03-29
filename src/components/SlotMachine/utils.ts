

export const generateRandomValue = () => {
    return Math.floor(Math.random() * 10); // Generates a random integer between 0 and 9
};

/**
 * Generates a random number with a specified number of digits.
 * @param digits - The number of digits in the generated number.
 * @returns A random number with the specified number of digits.
 */
export function generateRandomNumberWithDigits(digits: number): number {
  if (digits <= 0) {
    throw new Error('The number of digits must be a positive integer.');
  }

  // Calculate the minimum and maximum values based on the number of digits
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  // Generate and return a random number within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Gets the digit at a particular index of a given number.
 * @param number - The number from which to retrieve the digit.
 * @param index - The index of the digit to retrieve (0-based).
 * @returns The digit at the specified index, or undefined if the index is out of range.
 */
export function getDigitAtIndex(number: number | null, index: number): number | null {
    if (number === null) return null;
  // Convert the number to a string
  const numberStr = number.toString();

  // Check if the index is within the valid range
  if (index < 0 || index >= numberStr.length) {
    return null; // Return undefined if index is out of range
  }

  // Retrieve the digit at the specified index and convert it back to a number
  return parseInt(numberStr.charAt(index), 10);
}


/**
 * Gets the digit at a particular index of a given number.
 * @param start - The number from which to the range starts.
 * @param stop - The number by which the range ends.
 * @returns The digit at the specified index, or undefined if the index is out of range.
 */
export function generateUniqueCode(start: number, stop:number): string {
  return Math.floor(start + Math.random() * stop).toString();
}


export function findLargest(a: number, b: number, c: number, d: number, e: number): number {
  console.debug(a,b,c,d,e);
  return Math.max(a, b, c, d, e);
}

//  The Fisher-Yates shuffle algorithm
// runs in O(n) time
function shuffleArray<T>(array: T[]): T[] {
  // Create a copy of the array to avoid mutating the original one
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  
  return shuffled;
}

export function getRandomRaffle(raffleIds: string[]): number {
  const _arr = shuffleArray(raffleIds);
  const randomIndex = Math.floor(Math.random() * raffleIds.length);
  const d_one = _arr[randomIndex];

  return Number(d_one);
}