// Create a new Set
const mySet = new Set();

// Add elements to the set
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Adding a duplicate is ignored

// Check the size
console.log(mySet.size); // Output: 2

// Check for existence of an element with .has()
console.log(mySet.has('apple')); // Output: true
console.log(mySet.has('grape')); // Output: false

// Iterate over the set
mySet.forEach(value => {
  console.log(value);
});
// Output:
// "apple"
// "banana"

// Remove an element
mySet.delete('banana');
console.log(mySet.has('banana')); // Output: false

// Clear all elements
mySet.clear();
console.log(mySet.size); // Output: 0
