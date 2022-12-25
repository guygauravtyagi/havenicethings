class TreeLeaf {
    left;
    right;
    value;
    constructor(value) {
        this.value = value
    }
}

/**
 * 
 *                      1
 *                     / \
 *                    2   3
 *                   / \ / \
 *                  4  5 6  7
 *                 / \
 *                8   9
 * 
 */

tree = new TreeLeaf(1);
tree.left = new TreeLeaf(2);
tree.right = new TreeLeaf(3);
tree.left.left = new TreeLeaf(4);
tree.left.right = new TreeLeaf(5);
tree.right.left = new TreeLeaf(6);
tree.right.right = new TreeLeaf(7);
tree.left.left.left = new TreeLeaf(8);
tree.left.left.right = new TreeLeaf(9);

/**
 * 
 *                       11
 *                     /    \
 *                    12    13
 *                   / \    / \
 *                  14  15 16  17
 *                 / \
 *                18  19
 * 
 */

tree2 = new TreeLeaf(11);
tree2.left = new TreeLeaf(12);
tree2.right = new TreeLeaf(13);
tree2.left.left = new TreeLeaf(14);
tree2.left.right = new TreeLeaf(15);
tree2.right.left = new TreeLeaf(16);
tree2.right.right = new TreeLeaf(17);
tree2.left.left.left = new TreeLeaf(18);
tree2.left.left.right = new TreeLeaf(19);



/**
 * 
 *                       10
 *                     /    \
 *                    8      2
 *                   / \    / 
 *                  3   5  2
 * 
 */

tree3 = new TreeLeaf(10);
tree3.left = new TreeLeaf(8);
tree3.right = new TreeLeaf(2);
tree3.left.left = new TreeLeaf(3);
tree3.left.right = new TreeLeaf(5);
tree3.right.left = new TreeLeaf(2);


treeTraversal = {
    inorder: function (parentLeaf) {
        if (!parentLeaf) return;
        this.inorder(parentLeaf.left);
        console.log(parentLeaf.value);
        this.inorder(parentLeaf.right);
    },
    preorder: function (parentLeaf) {
        if (!parentLeaf) return;
        console.log(parentLeaf.value);
        this.preorder(parentLeaf.left);
        this.preorder(parentLeaf.right);
    },
    postorder: function (parentLeaf) {
        if (!parentLeaf) return;
        this.postorder(parentLeaf.left);
        this.postorder(parentLeaf.right);
        console.log(parentLeaf.value);
    }
}



// postorder(tree);

exports.tree = tree;
exports.tree2 = tree2;
exports.tree3 = tree3;
exports.treeTraversal = treeTraversal;
