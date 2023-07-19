// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// This question is a tree traversal

// DFS Iterative using Stack
var maxDepth = function (root) {
    var stack = [[root, 1]]
    var res = 0
    while (stack.length !== 0) {
        var el = stack.shift()
        var node = el[0]
        var depth = el[1]
        if (node !== null) {
            stack.unshift([node.right, depth + 1])
            stack.unshift([node.left, depth + 1])
            res = Math.max(res, depth)
        }
    }
    return res
};



// DFS Recursive
var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
};


// BFS using Queue
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