/**
 * https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/
 * Find Depth of Binary Tree
 */

const { tree } = require('./TreeTraversal');

depthTree = (node) => {
    if(!node) return 0;
    lDepth = depthTree(node.left);
    rDepth = depthTree(node.right);
    if(lDepth > rDepth) return lDepth+1;
    else return rDepth+1;
}

console.log(depthTree(tree));