// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// Using the middle character and going outwords
// Two pointer to check for the longest palindromes in 1-go
var longestPalindrome = function (s) {
    var res = ""
    var len = 0

    for (var i = 0; i < s.length; i++) {
        // For odd length of s
        var l = i
        var r = i
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > len) {
                res = s.slice(l, r + 1)
                len = r - l + 1
            }
            l--
            r++
        }
        // For even length of s
        var l = i
        var r = i + 1
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > len) {
                res = s.slice(l, r + 1)
                len = r - l + 1
            }
            l--
            r++
        }
    }
    return res
};

// Second solution would be:
// 1- Get substrings of s
// 2- Check for the palindromes in substrings
// 3- Return the longest one
// Dynamic Programming