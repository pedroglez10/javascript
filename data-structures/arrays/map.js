/**
 * Map method
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const numbers = [1, 4, 9];
const roots = numbers.map(num => Math.sqrt(num));
console.log(roots); // Output: [1, 2, 3]
