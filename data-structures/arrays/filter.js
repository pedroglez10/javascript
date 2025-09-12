/**
 * filter
 * Used to create a new array with all elements that pass the test implemented by the provided function.
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // Output: ['exuberant', 'destruction', 'present']
