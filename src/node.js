class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data; // The value or key stored in the node.
    this.left = left; // Reference to a left child node.
    this.right = right; // Reference to a right child node.
  }
}

export default Node;
