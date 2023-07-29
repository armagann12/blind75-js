// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

// Using a hashmap 
var groupAnagrams = function (strs) {
    var map = {}
    for (const word of strs) {
        var count = new Array(26).fill(0)
        for (const char of word) {
            var code = char.charCodeAt(0) - 'a'.charCodeAt(0)
            count[code]++
        }
        var values = map[count] || [];
        values.push(word);
        map[count] = values
    }
    return Object.values(map)
};