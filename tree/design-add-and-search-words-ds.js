// 211. Design Add and Search Words Data Structure
// https://leetcode.com/problems/design-add-and-search-words-data-structure/

//Trie and dfs recursion for "."
class TrieNode {
    constructor() {
        this.children = {}
        this.end = false
    }
}

var WordDictionary = function () {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    var current = this.root
    for (var char of word) {
        if (!current.children[char]) {
            current.children[char] = new TrieNode()
        }
        current = current.children[char]
    }
    current.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    var dfs = (j, root) => {
        var current = root
        for (var i = j; i < word.length; i++) {
            var char = word[i]
            if (char === ".") {
                for (var child of Object.values(current.children)) {
                    if (dfs(i + 1, child)) {
                        return true
                    }
                }
                return false
            } else {
                if (!current.children[char]) {
                    return false
                }
                current = current.children[char]
            }
        }
        return current.end
    }
    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */