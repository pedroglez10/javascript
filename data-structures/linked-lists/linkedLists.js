class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Head of the list
    this.size = 0; // Number of nodes in the list
  }

  // Add a new node to the end of the list
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert a node at a specific index
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  // Remove a node at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return null;
    }

    let current = this.head;
    let previous = null;
    if (index === 0) {
      this.head = current.next;
    } else {
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  // Print the linked list
  printList() {
    let current = this.head;
    let listString = "";
    while (current) {
      listString += current.data + " -> ";
      current = current.next;
    }
    console.log(listString + "null");
  }
}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.printList(); // 10 -> 20 -> 30 -> null
