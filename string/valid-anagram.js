// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

// HashMap my solution could need a refactor
var isAnagram = function (s, t) {
    var map = {}
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++
        } else { map[s[i]] = 1 }
    }
    for (var j = 0; j<t.length; j++){
        if(!map[t[j]] || map[t[j]] === 0){
            return false
        }else{
            map[t[j]]--
        }
    }
    // We can compare length of strings to avoid below code
    var arr = Object.values(map)
    console.log(arr)
    for (var k = 0; k<arr.length; k++){
        if(arr[k] !== 0){
            return false
        }
    }
    return true
}

var s = "rat"
var t = "car"

// Sorting the strings and comparing them
var isAnagram = function (s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};