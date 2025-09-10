/**
 * Math.max
 * Used to find the largest of zero or more numbers.
 * If no arguments are provided, it returns -Infinity.
 * Can be used with the spread operator to find the maximum value in an array.
 */

// Returns the largest of zero or more numbers.
Math.max(1, 3, 2); // 3
Math.max(-1, -3, -2); // -1
Math.max(); // -Infinity

// Using Math.max with arrays
const numbers = [1, 3, 2];
Math.max(...numbers); // 3