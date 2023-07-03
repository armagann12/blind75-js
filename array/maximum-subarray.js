// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
// Brute force
// Time Limit exceeded 
// O(n^2)

var maxSubArray = (nums) => {
    var max = nums[0]
    for (var i = 0; i < nums.length; i++) {
        var sum = nums[i]
        if (sum > max) {
            max = sum
        }
        for (var j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            if (sum > max) {
                max = sum
            }
        }
    }
    return max
};


var nums = [-2,1,-3,4,-1,2,1,-5,4]

var res = maxSubArray(nums)

console.log(res)