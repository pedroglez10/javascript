// -------Arrays
const numbers = [1, 2, 3, 4, 5];

// Simple for loop
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
}

// for...in
for (const index in numbers) {
    // console.log(index)
}

// for...of
for (const value of numbers) {
    // console.log(value)  
}

// ------- Matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// iterate the suqare matrix
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    // console.log(matrix[i][j]);
  } 
}

// iterate diagonals
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
}

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][matrix.length - 1 - i]);
}