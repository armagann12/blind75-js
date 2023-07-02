// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

// Nested for loops (Brute)
// Leetcode Error Time limit exceeded
// O(n^2)

var productExceptSelf = (nums) => {
    var arr = []
    for (var i = 0; i < nums.length; i++) {
        arr[i] = 1
        for (var j = 0; j < nums.length; j++) {
            if(i === j){
                continue
            }
            arr[i] *= nums[j]
        }
    }
    return arr
};

var nums = [1,2,3,4]

var res = productExceptSelf(nums)

console.log(res)
