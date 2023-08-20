// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

// We did not use graph for this

// One solution would be sorting
// Time O(logn)


// Using a set and checking for previous and after number 
// Time O(n)
var longestConsecutive = function(nums) {
    var longest = 0
    var set = new Set(nums)
    for(var num of nums){
        if(!(set.has(num - 1))){
            var length = 0
            while(set.has(num + length)){
                length++
                longest = Math.max(longest, length)
            }
        }
    }
    return longest
};