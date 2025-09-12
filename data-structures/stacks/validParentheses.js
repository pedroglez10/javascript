/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid. 
 * 
 * An input string is valid if: 
 * Open brackets must be closed by the same type of brackets. 
 * Open brackets must be closed in the correct order. 
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * We solve it by using a stack:
 * Push open brackets (, {, [ onto the stack.
 * When we see a closing bracket, check if it matches the top of the stack.
 * If it doesn’t match, return false.
 * At the end, the stack should be empty.
 */

var isValid = function(s) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Test cases
console.log(isValid("()"));     // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true
