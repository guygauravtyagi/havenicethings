/**
 * https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/
 * Convert a Binary Tree into its Mirror Tree
 */

const { tree, treeTraversal } = require('./TreeTraversal');

mirroTree = function (node) {
    if (!node) return;
    mirroTree(node.left);
    mirroTree(node.right);
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
}

console.log(treeTraversal.inorder(tree));
mirroTree(tree);
console.log(treeTraversal.inorder(tree));
