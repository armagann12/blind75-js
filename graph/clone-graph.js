// 133. Clone Graph
// https://leetcode.com/problems/clone-graph/

// Using recursive dfs
var cloneGraph = function (node) {
    var oldToNew = new Map()
    var dfs = (node) => {
        if (oldToNew.has(node)) {
            return oldToNew.get(node)
        }
        var copy = new Node(node.val)
        oldToNew.set(node, copy)
        for (var nei of node.neighbors) {
            copy.neighbors.push(dfs(nei))
        }
        return copy
    }
    return node ? dfs(node) : null;
};