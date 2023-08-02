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