// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Sliding Window using set
var lengthOfLongestSubstring = (s) => {
    var strSet = new Set()
    var max = 0
    var l = 0
    for(var r = 0; r< s.length; r++){
        while(strSet.has(s[r])){
            strSet.delete(s[l])
            l++
        }
        strSet.add(s[r])
        max = Math.max(max, strSet.size)
    }
    return max
};