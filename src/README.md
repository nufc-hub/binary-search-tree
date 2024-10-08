# Binary Search Tree Implementation

This repository contains a simple implementation of a **Binary Search Tree (BST)** in JavaScript. It provides methods for building the tree, inserting and deleting nodes, and performing tree traversals like preorder, inorder, and postorder.

## Classes

### 1. `Node`
Represents a node in the tree. Each node has:
- **`data`**: the value or key stored in the node.
- **`left`**: reference to the left child node.
- **`right`**: reference to the right child node.

### 2. `Tree`
Manages the operations and structure of the binary search tree. It offers the following functionalities:

- **`buildTree(array)`**: Builds a balanced BST from a sorted array.
- **`insert(value)`**: Inserts a value into the tree while keeping it balanced.
- **`delete(value)`**: Deletes a value from the tree, rebalancing as needed.
- **`findValue(value)`**: Searches for a specific value in the tree.
- **`height(node)`**: Computes the height of the tree or a given node.
- **`depth(targetNode)`**: Computes the depth of a given node in the tree.
- **`isBalanced()`**: Checks whether the tree is balanced.
- **`rebalance()`**: Rebalances the tree if it's unbalanced.

## Traversal Methods

- **`preOrder(callback)`**: Traverses the tree in preorder (Root, Left, Right).
- **`inOrder(callback)`**: Traverses the tree in inorder (Left, Root, Right).
- **`postOrder(callback)`**: Traverses the tree in postorder (Left, Right, Root).
- **`levelOrder(callback)`**: Performs a breadth-first traversal (level-order).
