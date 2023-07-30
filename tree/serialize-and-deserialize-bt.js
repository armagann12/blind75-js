// 297. Serialize and Deserialize Binary Tree
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

// DFS preorder traversal

// Encodes a tree to a single string.
var serialize = (root) => {
    var res = []
    var dfs = (node) => {
        if (!node) {
            res.push("n")
            return
        }
        res.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return res.join(",")
};
// Decodes your encoded data to tree.
var deserialize = (data) => {
    var arr = data.split(",")
    let i = 0
    var dfs = () => {
        if(arr[i] === "n"){
            i++
            return null
        }
        var node = new TreeNode(arr[i])
        i++
        node.left = dfs()
        node.right = dfs()
        return node
    }
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */





// It can be also done with BFS but more code required