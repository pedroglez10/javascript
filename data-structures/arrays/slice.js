// slice method creates a new array by extracting a section of an existing array
const array1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const slicedArray = array1.slice(2, 4);
console.log(slicedArray); // Output: ['camel', 'duck']

// removing the last element
const array2 = [1, 2, 3, 4, 5];
const newArray = array2.slice(0, -1);
console.log(newArray); // Output: [1, 2, 3, 4]

// removing the first element
const anotherArray = [1, 2, 3, 4, 5];
const modifiedArray = anotherArray.slice(1);
console.log(modifiedArray); // Output: [2, 3, 4, 5]