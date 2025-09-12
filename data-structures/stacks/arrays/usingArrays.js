class Stack {
  constructor() {
    this.items = []; // Initializes an empty array
  }

  push(element) {
    this.items.push(element); // Adds element to the top
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow"; // Handles empty stack
    }
    return this.items.pop(); // Removes and returns top element
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1]; // Returns top element without removing
  }

  isEmpty() {
    return this.items.length === 0; // Checks if stack is empty
  }

  size() {
    return this.items.length; // Returns number of elements
  }

  clear() {
    this.items = []; // Removes all elements
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // 30
console.log("Popped element:", stack.pop()); // 30
console.log("Stack size:", stack.size()); // 2
console.log("Is stack empty?", stack.isEmpty()); // false
