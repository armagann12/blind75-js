// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/

// Brute Force
// O(n^2)
// Time limit exceeded
var maxProduct = (nums) => {
    var max = nums[0]
    for (var i = 0; i < nums.length; i++) {
        var product = nums[i]
        if (product > max) [
            max = product
        ]
        for (var j = i + 1; j < nums.length; j++) {
            product *= nums[j]
            if (product > max) [
                max = product
            ]
        }
    }
    return max
};

var nums = [2, 3, -2, 4]

res = maxProduct(nums)
console.log(res)


