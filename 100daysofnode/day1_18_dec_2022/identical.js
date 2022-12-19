/**
 * https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/
 * Find if tree are identical
 */

const { tree, tree2 } = require('./TreeTraversal');

checkIdentical = (node1, node2) => {
    if (!node1 & !node2) return true;
    if (node1 && node2) {
        return (node1.value === node2.value && checkIdentical(node1.left, node2.left) && checkIdentical(node1.right, node2.right));
    }
    return false;
}

console.log(checkIdentical(tree, tree));
console.log(checkIdentical(tree, tree2));
console.log(checkIdentical(tree2, tree2));