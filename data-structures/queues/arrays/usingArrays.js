class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Return the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the queue
  size() {
    return this.items.length;
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue size:", queue.size()); // 3
console.log("Front element:", queue.peek()); // 10

console.log("Dequeued element:", queue.dequeue()); // 10
console.log("Dequeued element:", queue.dequeue()); // 20

console.log("Is queue empty?", queue.isEmpty()); // false
