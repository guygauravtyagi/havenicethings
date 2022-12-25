const { tree, treeTraversal } = require('./../day1_18_dec_2022/TreeTraversal');

findDepth = function (node) {
    if (!node) return 0;
    return Math.max(findDepth(node.left), findDepth(node.right)) + 1;
}

findBalance = function (node) {
    if (!node) return true;
    return (findDepth(node.left) - findDepth(node.right) <= 1) && findBalance(node.left) && findBalance(node.right) ? true : false;
}

console.log(findBalance(tree));