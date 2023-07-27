// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Understanding spliting case. Better with a tree picture
var lowestCommonAncestor = (root, p, q) => {
    var curr = root
    while (curr !== null) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left
        } else {
            return curr
        }
    }
};