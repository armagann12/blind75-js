// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

// O(n) solution using a for loop
var search = (nums, target) => {
    var res = -1
    for(var i = 0; i<nums.length; i++){
        if (nums[i] === target){
            res = i
        }
    }
    return res
};


var nums = [4, 5, 6, 7, 0, 1, 2]
var target = 0

var res = search(nums, target)
console.log(res)