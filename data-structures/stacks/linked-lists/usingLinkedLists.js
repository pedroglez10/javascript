class Stack {
  constructor() {
    this.top = null; // Head of the linked list
    this.size = 0;
  }

  // Add an element to the top of the stack (head of the list)
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedData = this.top.data;
    this.top = this.top.next;
    this.size--;
    return poppedData;
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the number of elements in the stack
  getSize() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // 30
console.log("Size:", stack.getSize()); // 3

console.log("Popped element:", stack.pop()); // 30
console.log("Top element after pop:", stack.peek()); // 20
console.log("Size after pop:", stack.getSize()); // 2
console.log("Is stack empty?", stack.isEmpty()); // false

stack.pop();
stack.pop();
console.log("Is stack empty?", stack.isEmpty()); // true
console.log("Pop from empty stack:", stack.pop()); // null
