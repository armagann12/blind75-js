// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/

// Recursive DFS  like same tree
var isSubtree = function(root, subRoot) {
    if(subRoot === null){
        return true
    }
    if(root === null){
        return false
    }
    if(isSameTree(root, subRoot)){
        return true
    }
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};

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