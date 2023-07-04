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

// Dynamic Programming -Greedy? 
// O(n)
var maxProductAlt = (nums) => {
    var res = nums[0]
    var min = 1
    var max = 1

    for (var i = 0; i < nums.length; i++) {
        const minProduct = min * nums[i]
        const maxProduct = max * nums[i]

        min = Math.min(maxProduct, minProduct, nums[i]);
        max = Math.max(maxProduct, minProduct, nums[i]);

        res = Math.max(res, max);
    }
    return res
}

var nums = [2, 3, -2, 4]
res = maxProductAlt(nums)
console.log(res)


