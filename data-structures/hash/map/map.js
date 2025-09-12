// Create a new Map
const myMap = new Map();

// Add key-value pairs with the .set() method
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set(123, 'a number key');
myMap.set({ id: 1 }, 'an object key');

// Retrieve a value with the .get() method
console.log(myMap.get('name')); // Output: Alice

// Check for the existence of a key with .has()
console.log(myMap.has('age')); // Output: true

// Get the number of elements with the .size property
console.log(myMap.size); // Output: 4

// Iterate over the map
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Remove a key-value pair with .delete()
myMap.delete('age');
console.log(myMap.has('age')); // Output: false

// Clear all entries
myMap.clear();
console.log(myMap.size); // Output: 0
