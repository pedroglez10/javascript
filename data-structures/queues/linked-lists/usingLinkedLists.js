// A simple Node class for the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // Pointer to the front of the queue
    this.rear = null; // Pointer to the rear of the queue
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedData = this.front.data;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return removedData;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

// Example usage
const listQueue = new Queue();
listQueue.enqueue("Task 1");
listQueue.enqueue("Task 2");
listQueue.enqueue("Task 3");

console.log("Queue size:", listQueue.getSize()); // 3
console.log("Front element:", listQueue.peek()); // "Task 1"

console.log("Dequeued element:", listQueue.dequeue()); // "Task 1"
console.log("Dequeued element:", listQueue.dequeue()); // "Task 2"

console.log("Front element:", listQueue.peek()); // "Task 3"
console.log("Is queue empty?", listQueue.isEmpty()); // false
