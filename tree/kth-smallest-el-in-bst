// 230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// Inorder traversal (DFS) in BST always from least to most 
var kthSmallest = (root, k) => {
    var n = 0
    var stack = []
    var node = root
    while (node || stack.length !== 0) {
        while (node) {
            stack.unshift(node)
            node = node.left
        }
        node = stack.shift()
        n++
        if (n === k) {
            return node.val
        }
        node = node.right
    }
};