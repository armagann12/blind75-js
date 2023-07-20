// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/description/

// DFS Recursion
var invertTree = function(root) {
    if(root === null){
        return root
    }
    var tmp = root.right 
    root.right = root.left
    root.left = tmp
    invertTree(root.right)
    invertTree(root.left)
    return root
};