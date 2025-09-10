// Math.round() returns the value of a number rounded to the nearest integer
const num1 = 5.6;
console.log(Math.round(num1)); // 6
const num2 = 5.4;
console.log(Math.round(num2)); // 5
const num3 = 5.65;
console.log(Math.round(num3)); // 6
const num4 = 5.3546767; // rounds 3 decimals
console.log(Math.round(num4 * 1000) / 1000); // 5.355
const num5 = 5.345676767345784; // rounds 6 decimals
console.log(Math.round(num5 * 1e6) / 1e6); // 5.345677