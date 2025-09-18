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

// Using reduce to find the maximum in an array
// Providing -Infinity as the initial value ensures that the first element of the array will always be greater than or equal to the initial max, correctly starting the comparison.
const maxInArray = numbers.reduce((max, current) => Math.max(max, current), -Infinity); // 3