// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
// TODO -> Divide and Counquer

// Brute force
// Time Limit exceeded 
// O(n^2)
// You can also refactor this as well
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

// Sliding window type solution
// O(n)
// This works because if sum gets less than 0 we reset the sum and check for max along the way
var maxSubArrayAlt = (nums) => {
    var max = nums[0]
    var sum = 0
    for (var i = 0; i < nums.length; i++) {
        if (sum < 0){
            sum = 0
        }
        sum += nums[i]
        if(max < sum){
            max = sum
        }
    }
    return max
}

// TODO Divide and Counquer impl


var nums = [-2,1,-3,4,-1,2,1,-5,4]

var res = maxSubArrayAlt(nums)

console.log(res)