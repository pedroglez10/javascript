class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }
      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);

tree.inorder(); // Output: 20, 10, 30
