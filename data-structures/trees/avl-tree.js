class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // leaf node height = 1
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  // ---------- Helpers ----------
  getHeight(node) {
    return node ? node.height : 0;
  }

  updateHeight(node) {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Right rotate (y)
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    // Return new root
    return x;
  }

  // Left rotate (x)
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    // Return new root
    return y;
  }

  // ---------- Insert ----------
  insert(value) {
    this.root = this._insertNode(this.root, value);
    return this; // chainable
  }

  _insertNode(node, value) {
    // 1. Normal BST insert
    if (!node) return new AVLNode(value);

    if (value === node.value) {
      // this implementation ignores duplicates
      return node;
    } else if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else {
      node.right = this._insertNode(node.right, value);
    }

    // 2. Update height
    this.updateHeight(node);

    // 3. Get balance and rebalance if needed
    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    // Already balanced
    return node;
  }

  // ---------- Search ----------
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // ---------- Find min in subtree ----------
  _minValueNode(node) {
    let current = node;
    while (current && current.left) current = current.left;
    return current;
  }

  // ---------- Delete ----------
  delete(value) {
    this.root = this._deleteNode(this.root, value);
    return this;
  }

  _deleteNode(node, value) {
    if (!node) return node;

    // 1. Standard BST delete
    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      // node with only one child or no child
      if (!node.left || !node.right) {
        const temp = node.left ? node.left : node.right;
        if (!temp) {
          // no child
          node = null;
        } else {
          // one child
          node = temp;
        }
      } else {
        // node with two children: get inorder successor (smallest in the right subtree)
        const temp = this._minValueNode(node.right);
        node.value = temp.value;
        node.right = this._deleteNode(node.right, temp.value);
      }
    }

    // If the tree had only one node then return
    if (!node) return node;

    // 2. Update height
    this.updateHeight(node);

    // 3. Get balance and rebalance
    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rightRotate(node);
    }

    // Left Right Case
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && this.getBalance(node.right) <= 0) {
      return this.leftRotate(node);
    }

    // Right Left Case
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // ---------- Traversals ----------
  inorder(node = this.root, visit = (v) => console.log(v)) {
    if (node) {
      this.inorder(node.left, visit);
      visit(node.value);
      this.inorder(node.right, visit);
    }
  }

  preorder(node = this.root, visit = (v) => console.log(v)) {
    if (node) {
      visit(node.value);
      this.preorder(node.left, visit);
      this.preorder(node.right, visit);
    }
  }

  postorder(node = this.root, visit = (v) => console.log(v)) {
    if (node) {
      this.postorder(node.left, visit);
      this.postorder(node.right, visit);
      visit(node.value);
    }
  }

  levelOrder(visit = (v) => console.log(v)) {
    if (!this.root) return;
    const q = [this.root];
    while (q.length) {
      const node = q.shift();
      visit(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  // Utility to print tree nodes with height (for debugging)
  printWithHeights(node = this.root, prefix = "") {
    if (!node) return;
    console.log(`${prefix}${node.value} (h=${node.height})`);
    this.printWithHeights(node.left, prefix + "  L-");
    this.printWithHeights(node.right, prefix + "  R-");
  }
}

// ---------- Example usage ----------
const avl = new AVL();
// Insert values (creates a balanced AVL)
[30, 20, 40, 10, 25, 35, 50, 5, 15, 27].forEach((v) => avl.insert(v));

console.log("Level-order after inserts:");
avl.levelOrder((v) => process.stdout.write(v + " "));
console.log("\n\nTree with heights:");
avl.printWithHeights();

console.log("\nDelete 20 (node with two children) and rebalance:");
avl.delete(20);
avl.levelOrder((v) => process.stdout.write(v + " "));
console.log("\n");
avl.printWithHeights();

console.log("\nSearch 27:", avl.search(27)); // true
console.log("Search 999:", avl.search(999)); // false
