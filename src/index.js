import Tree from './tree.js';

// Function to generate random number between 0 and 100.
const numberArrayGenerator = (arraylength) => {
  let numberArray = [];

  for (let i = 0; i < arraylength; i++) {
    // Generate random number between 0 and 100
    let randomNumber = Math.floor(Math.random() * 100);
    // Push it to the array.
    numberArray.push(randomNumber);
  }

  return numberArray;
};

// Random number array with a length of nine.
const treeArray = numberArrayGenerator(9);

// New binary search tree.
const tree = new Tree(treeArray);

console.log(tree.isBalanced()); // Returns true.
tree.printTree(); // Print the tree.
tree.preOrder(tree.printNode); // Preorder traversal.
tree.inOrder(tree.printNode); // Inorder traversal.
tree.postOrder(tree.printNode); // Postorder traversal.
tree.insert(500); // Insert node with a value of 500.
tree.insert(600); // Insert node with a value of 600.
tree.insert(700); // Insert node with a value of 700.
tree.insert(5); // Insert node value 5. Tree is always rebalanced during insertion.
console.log(tree.isBalanced()); // Returns true. Tree remains balanced through all insertions.
tree.printTree(); // Print the tree.
