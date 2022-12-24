/**
 * https://www.geeksforgeeks.org/diameter-of-a-binary-tree-in-on-a-new-method/
 * Diameter of a Binary Tree
 */


const { tree, treeTraversal } = require('./../day1_18_dec_2022/TreeTraversal');

findLength = function (node) {
    if (!node) return 0;
    let temp = findLength(node.left) + 1;
    if (temp < (findLength(node.right) + 1)) temp = findLength(node.right) + 1;
    return temp;
}

findDiameter = function(node) {
    return findLength(node.left) + findLength(node.right) + 1;
}

console.log(findDiameter(tree));