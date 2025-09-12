function containsDuplicate_hashSet(nums) {
  const uniqueElements = new Set();


  for (const num of nums) {
    // If the element is already in the set, we've found a duplicate
    if (uniqueElements.has(num)) {
      return true;
    }
    // Otherwise, add the element to the set
    uniqueElements.add(num);
  }


  // If the loop finishes, no duplicates were found
  return false;
}

// Test cases
console.log(containsDuplicate_hashSet([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate_hashSet([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate_hashSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
