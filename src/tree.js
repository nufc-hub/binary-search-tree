import Node from './node.js';

class Tree {
  constructor(array) {
    this.root = this.buildTree(array); // The return value of buildTree function.
  }

  buildTree(array) {
    const build = (start, end) => {
      if (start > end) {
        return null;
      }
      const mid = Math.floor((start + end) / 2);
      const node = new Node(array[mid]); //Make mid this.root?
      // Create a tree node with mid as root.
      // Recursively do the following steps...

      node.left = build(start, mid - 1);
      node.right = build(mid + 1, array.length);

      return node;
    };

    return build(0, array.length - 1); // Check meaning of this
  }
}
export default Tree;
