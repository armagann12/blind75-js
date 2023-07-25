// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/

// DFS Recursive
var isValidBST = (root) => {
    var validate = (node, l, r) => {
        if (node === null) {
            return true
        }
        if(!(node.val < r && node.val > l)){
            return false
        }
        return validate(node.left, l, node.val) && validate(node.right, node.val, r)
    }
    return validate(root, -Infinity, Infinity)
};

/*
A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/