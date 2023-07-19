// 100. Same Tree
// https://leetcode.com/problems/same-tree/

// Recursive DFS
var isSameTree = function (p, q) {
    // Base cases!!
    if (p === null && q === null) {
        return true
    }
    if (p === null || q === null) {
        return false
    }
    if ((p.val !== q.val)) {
        return false
    }
    return (isSameTree(p.right, q.right) && isSameTree(p.left, q.left))
};

// Using BFS in max-depth question and comparing p and q values