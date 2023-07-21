// 124. Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/

// Recursive DFS
var maxPathSum = function(root) {
    var max = [root.val]

    var dfs = (root) =>{
        if(root === null){
            return 0
        }
        var leftMax = dfs(root.left)
        var rightMax = dfs(root.right)
        leftMax = Math.max(leftMax, 0)
        rightMax = Math.max(rightMax, 0)

        max = Math.max(max, root.val + leftMax + rightMax)

        return root.val + Math.max(leftMax, rightMax)

    }

    dfs(root)
    return max
};