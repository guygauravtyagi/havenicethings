/**
 * https://www.geeksforgeeks.org/check-for-children-sum-property-in-a-binary-tree/
 * Check for Children Sum Property in a Binary Tree
 * 
 */

const { tree3, treeTraversal } = require('./../day1_18_dec_2022/TreeTraversal');

isSum = function (node) {
    if (!node) return true;
    isSum(node.left);
    isSum(node.right);
    if (isSum(node.left) && isSum(node.right)
    && !(node.left && node.right)
    || node.value === getSum(node)) return true;
    else return false;
}

getSum = function (node) {
    if(node.right && node.left) return node.left.value + node.right.value;
    if(!node.right && node.left) return node.left.value;
    if(node.right && !node.left) return node.right.value;
}

console.log(isSum(tree3));