// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// This question is a tree traversal

// DFS Iterative


// DFS Recursive
// O(n)
var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
};


// BFS using Queue
// O(n)
var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    var queue = [root]
    var level = 0
    while (queue.length !== 0) {
        level++
        var len = queue.length
        for (var i = 0; i < len; i++) {
            var node = queue.shift()
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
    }
    return level
};