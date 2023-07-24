// 105. Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// DFS Understanding preorder and inorder and using both of them
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null
    }
    var root = new TreeNode(preorder[0])
    var mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    return root
};

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]