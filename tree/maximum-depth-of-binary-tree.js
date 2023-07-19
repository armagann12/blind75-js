// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// This question is a tree traversal

// DFS Iterative


// DFS Recursive
// O(n)
var maxDepth = function(root) {
    if(root === null){
        return 0
    }
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
};


// BFS using queue / (dequeu)