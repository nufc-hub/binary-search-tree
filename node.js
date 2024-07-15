class Node {
  constructor(data = null, leftNode = null, rightNode = null) {
    this.data = data; // The value or key stored in the node.
    this.leftNode = leftNode; // Reference to a left child node.
    this.rightNode = rightNode; // Reference to a right child node.
  }
}
