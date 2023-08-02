// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

// Using regex to filter out non alphebatic chars and reversing
var isPalindrome = function(s) {
    var newStr = ""
    for(var char of s){
        if(char.match(/^[A-Za-z0-9]+$/)){
            newStr += char.toLowerCase()
        }
    }
    return newStr === newStr.split("").reverse().join("")
};

// Using two pointers and regex
var isPalindrome = function (s) {
    var l = 0
    var r = s.length - 1
    while (l < r) {
        console.log(s[r])
        var leftChar = s[l]
        var rightChar = s[r]
        if (!(leftChar.match(/^[A-Za-z0-9]+$/))) {
            l++
        } else if (!(rightChar.match(/^[A-Za-z0-9]+$/))) {
            r--
        } else {
            if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            }
            l++
            r--
        }
    }
    return true
};