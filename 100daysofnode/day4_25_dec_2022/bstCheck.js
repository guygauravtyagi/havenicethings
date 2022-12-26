/**
 * 
 * https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
 * A program to check if a Binary Tree is BST or not
 * 
 */

const { tree, treeTraversal } = require('./../day1_18_dec_2022/TreeTraversal');

checkBst = function (node) {
    if (!node) return true;
    let temp = true;
    if (!node.left && node.right) temp = temp && node.value < node.right.value;
    if (!node.right && node.left) temp = temp && node.value > node.left.value;
    console.log('temp ->', temp)
    if (checkBst(node.left) && checkBst(node.right)
        && ((node.left && node.right && (node.value > node.left.value && node.value < node.right.value)) || temp)) return true;
    return false
}

console.log(checkBst(tree))