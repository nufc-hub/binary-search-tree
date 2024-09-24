import Node from './node.js';

class Tree {
  constructor(array) {
    this.root = this.buildTree(array); // The return value of buildTree function.
  }

  buildTree(array) {
    // Recursive function.
    const build = (start, end) => {
      // Base case. Recursion stops when start becomes greater than end.
      if (start > end) {
        return null;
      }

      const mid = Math.floor((start + end) / 2); // Get the value at middle index of the array.
      const node = new Node(array[mid]); // Set the value at the middle index to be the root.

      node.left = build(start, mid - 1);
      node.right = build(mid + 1, end);

      return node;
    };

    // Starts the recursive build function.
    return build(0, array.length - 1);
  }

  insert(value) {
    // Recursive function.
    const insertRec = (node, value) => {
      // Base case. If the current node = null then there an empty space has been found
      // where the node can be inserted. In which case a new node is created and inserted.
      if (node === null) {
        return new Node(value);
      }

      // Checks for duplicates. If the value already exists in the tree it is not added.
      if (value === node.data) {
        return node;
      }

      // If the value is less than the current nodes value, it recursively tries to insert into the left
      // subtree (node.left)
      if (value < node.data) {
        node.left = insertRec(node.left, value);
      } else {
        // If the value is greater than the the current nodes value, it recursively tries to insert into the right
        // subtree (node.right)
        node.right = insertRec(node.right, value);
      }

      // Returns current node so that the trees structure is maintained as the recursion unwinds.
      return node;
    };

    // Starts the recursive insertRec function.
    this.root = insertRec(this.root, value);
  }

  delete(value) {
    const deleteRec = (node, value) => {
      // Base case: if node is null value is not present
      // so it returns null.
      if (node === null) {
        return node;
      }

      if (value < node.data) {
        // If the value to be deleted is less than the current node
        // it moves to the left subtree.
        node.left = deleteRec(node.left, value);
      } else if (value > node.data) {
        // If the value to be deleted is greater than the current node
        // it moves to the right subtree.
        node.right = deleteRec(node.right, value);
      } else {
        // Node to be deleted is found.

        // If node has one or no children.
        // If node has no children, node value is replaced with null.
        // If node has one child, node value is replaced with child's value.
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        // If node has two children. Replace the node with the smallest value from the right subtree.

        // Get the smallest value in the right subtree.
        node.data = this.minValue(node.right);

        // Delete the smallest value in the right subtree from its original location.
        node.right = deleteRec(node.right, node.data);
      }

      return node;
    };

    this.root = deleteRec(this.root, value);
  }

  // Used to find the smallest value.
  minValue(node) {
    let minVal = node.data;
    while (node.left !== null) {
      minVal = node.left.data;
      node = node.left;
    }

    return minVal;
  }

  // Used to find a value in the tree.
  findValue(value) {
    const findValueRec = (node, value) => {
      // If the value does not exist.
      if (node === null) {
        return 'Value does not exist.';
      }

      //If the value is found.
      if (node.data === value) {
        return node;
      }

      // Search the left subtree.
      if (value < node.data) {
        return findValueRec(node.left, value);
        // Search the right subtree.
      } else if (value > node.data) {
        return findValueRec(node.right, value);
      }
    };

    // Starts the recursive findValueRec function.
    return findValueRec(this.root, value);
  }

  // Breadth first level order.
  levelOrder(callback) {
    // Throw error if callback is not provided.
    if (typeof callback !== 'function') {
      throw new Error('Callback function required as argument.');
    }
    // Queues the results.
    const queue = [];

    // Push root node to queue.
    if (this.root !== null) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      // Remove current node from queue.
      const currentNode = queue.shift();

      // Print the value of the current node.
      callback(currentNode);

      // If current node has a left child - push it.
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      // If current node has a right child - push it.
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  // Display the node values in order.
  inOrder(callback) {
    // Throw error if callback is not provided.
    if (typeof callback !== 'function') {
      throw new Error('Callback function required as argument.');
    }

    const inOrderRec = (node) => {
      if (node === null) {
        return;
      }

      // Cycle through left nodes
      inOrderRec(node.left);

      // Print the current node
      callback(node);

      // Cycle to right node
      inOrderRec(node.right);
    };

    // Starts the recursive inOrderRec function.
    inOrderRec(this.root);
  }

  // Display the node values in pre-order.
  preOrder(callback) {
    // Throw error if callback is not provided.
    if (typeof callback !== 'function') {
      throw new Error('Callback function required as argument.');
    }

    const preOrderRec = (node) => {
      if (node === null) {
        return;
      }

      // Print the current node
      callback(node);

      // Cycle through left nodes
      preOrderRec(node.left);

      // Cycle to right node
      preOrderRec(node.right);
    };

    // Starts the recursive preOrderRec function.
    preOrderRec(this.root);
  }

  // Display the node values in post-order.
  postOrder(callback) {
    // Throw error if callback is not provided.
    if (typeof callback !== 'function') {
      throw new Error('Callback function required as argument.');
    }

    const postOrderRec = (node) => {
      if (node === null) {
        return;
      }

      // Cycle through left nodes
      postOrderRec(node.left);

      // Cycle to right node
      postOrderRec(node.right);

      // Print the current node
      callback(node);
    };

    // Starts the recursive postOrderRec function.
    postOrderRec(this.root);
  }

  // Used as a callback to print node value.
  printNode(node) {
    console.log(node.data);
  }

  printTree(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
export default Tree;
