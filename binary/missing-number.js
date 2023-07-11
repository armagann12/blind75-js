// 268. Missing Number
// https://leetcode.com/problems/missing-number/

// Using a for loop and totals
var missingNumber = (nums) => {
    var len = nums.length
    var total = ((len) * (len + 1)) / 2
    var subtotal = 0
    for (var i = 0; i < len; i++) {
        subtotal += nums[i]
    }
    return total - subtotal
};


var nums = [3, 0, 1]
var res = missingNumber(nums)
console.log(res)