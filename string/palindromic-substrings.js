// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

// Using the same technique as longest-palindromic
// Two pointer to count palindromes in 1-go
var countSubstrings = (s) => {
    var res = 0
    for (var i = 0; i < s.length; i++) {
        var l = i
        var r = i
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            res++
            l--
            r++
        }

        l = i
        r = i + 1
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            res++
            l--
            r++
        }
    }
    return res
};

// Second solution would be:
// 1- Get substrings of s
// 2- Check for the palindromes in substrings
// 3- Return the count of palindromes
// Dynamic Programming