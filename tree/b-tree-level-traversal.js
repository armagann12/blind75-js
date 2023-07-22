// https://leetcode.com/problems/binary-tree-level-order-traversal/
// 102. Binary Tree Level Order Traversal

// BFS
var levelOrder = function (root) {
    var res = []
    if (root === null) {
        return res
    }
    var queue = [root]
    while (queue.length !== 0) {
        var level = []
        var len = queue.length
        for (var i = 0; i < len; i++) {
            var node = queue.shift()
            level.push(node.val)
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
        res.push(level)
    }
    return res
};