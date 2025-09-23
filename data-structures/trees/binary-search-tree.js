class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // no duplicates
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search a value in the BST
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // Helper: find the minimum value node in a subtree
  findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  // Delete a node
  delete(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      // Case 1: No children
      if (!node.left && !node.right) return null;

      // Case 2: One child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Case 3: Two children
      let successor = this.findMin(node.right);
      node.value = successor.value;
      node.right = this.delete(successor.value, node.right);
    }
    return node;
  }

  // In-order traversal (sorted order)
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Pre-order traversal
  preorder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Post-order traversal
  postorder(node = this.root) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }

  // Level-order traversal (BFS)
  levelOrder() {
    let queue = [];
    if (this.root) queue.push(this.root);

    while (queue.length) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

// Example usage:
let bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Search 60:", bst.search(60)); // true
console.log("Search 25:", bst.search(25)); // false

console.log("In-order (sorted):");
bst.inorder(); // 20, 30, 40, 50, 60, 70, 80

console.log("Pre-order:");
bst.preorder(); // 50, 30, 20, 40, 70, 60, 80

console.log("Post-order:");
bst.postorder(); // 20, 40, 30, 60, 80, 70, 50

console.log("Level-order:");
bst.levelOrder(); // 50, 30, 70, 20, 40, 60, 80
