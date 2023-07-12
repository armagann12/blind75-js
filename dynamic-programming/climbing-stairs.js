// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// Brute Force
// Using a desicion tree --> with DFS depth first search

var climbStairs = function(n) {
    
};

// Memoization

var climbStairs2 = function(n) {
    
};

// Dynamic Programming -> Buttom Up

var climbStairs3 = function(n) {
    var one = 1
    var two = 1
    for(var i = 0; i< n -1; i++){
        var tmp = one
        one += two
        two = tmp
    }
    return one
};

var n = 8
var res = climbStairs3(n)
console.log(res)