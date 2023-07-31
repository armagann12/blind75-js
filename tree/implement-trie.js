// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode {
    constructor() {
    this.children = {}
    this.end = false
    }
}

var Trie = function () {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    var current = this.root
    for (var char of word) {
        if (!current.children[char]){
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
Trie.prototype.search = function (word) {
    var current = this.root
    for (var char of word) {
        if (!current.children[char]){
            return false
        }
        current = current.children[char]
    }
    return current.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var current = this.root
    for (var char of prefix) {
        if (!current.children[char]){
            return false
        }
        current = current.children[char]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */