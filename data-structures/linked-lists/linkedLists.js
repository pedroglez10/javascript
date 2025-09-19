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
  addToTail(data) {
    const newNode = new Node(data);
    
    if (this.head === null) { // if the list is empty, new node becomes the head
      this.head = newNode;
    } else { // otherwise, traverse to the last node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode; // attach the new node at the tail
    }

    this.size++;
  }

  // Add a new node to the beginning of the list
  addToHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // new node points to the current head
    this.head = newNode; // new node becomes the new head
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
linkedList.addToTail(10);
linkedList.addToTail(20);
linkedList.addToTail(30);
linkedList.printList(); // 10 -> 20 -> 30 -> null
linkedList.addToHead(5);
linkedList.printList(); // 5 -> 10 -> 20 -> 30 -> null
linkedList.insertAt(15, 2);
linkedList.printList(); // 5 -> 10 -> 15 -> 20 -> 30 -> null
linkedList.removeAt(4);
linkedList.printList(); // 5 -> 10 -> 15 -> 20 -> null
