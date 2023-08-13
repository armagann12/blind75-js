// 212. Word Search II
//https://leetcode.com/problems/word-search-ii/

// Trie backtracking recursive dfs
class TrieNode {
    constructor() {
        this.children = {}
        this.end = false
    }
}

var findWords = function (board, words) {
    this.root = new TrieNode()
    for (var word of words) {
        addWord(word)
    }
    var ROWS = board.length
    var COLS = board[0].length
    var res = new Set()
    var visit = new Set()
    var dfs = (r, c, node, word) => {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || visit.has(`${r},${c}`) || !(board[r][c] in node.children)) {
            return
        }
        visit.add(`${r},${c}`)
        node = node.children[board[r][c]]
        word += board[r][c]
        if (node.end) {
            res.add(word)
        }
        dfs(r + 1, c, node, word)
        dfs(r - 1, c, node, word)
        dfs(r, c + 1, node, word)
        dfs(r, c - 1, node, word)
        visit.delete(`${r},${c}`);
    }
    for (var r = 0; r < ROWS; r++) {
        for (var c = 0; c < COLS; c++) {
            dfs(r, c, this.root, "")
        }
    }
    return Array.from(res)
};

function addWord(word) {
    var current = this.root
    for (var char of word) {
        if (!current.children[char]) {
            current.children[char] = new TrieNode()
        }
        current = current.children[char]
    }
    current.end = true
};