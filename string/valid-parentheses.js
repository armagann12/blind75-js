// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// Using a stack
var isValid = function (s) {
    var stack = []
    var map = {
        "}": "{",
        "]": "[",
        ")": "(",
    };
    for(var char of s){
        if(!(char in map)){
            stack.push(char)
            continue
        }
        if(stack[stack.length - 1] === map[char]){
            stack.pop()
            continue
        }
        return false
    }
    return stack.length === 0
};

var s = "()[]{}"