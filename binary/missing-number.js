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

// Another solution without bitwise
var missingNumber2 = (nums) => {
    var res = 0
    while (nums.includes(res)) {
        res++
    }
    return res
}

// Binary solution O(N) runtime O(1) space
// With XOR --> 0 1 2 3 XOR with 0 1 3 will return 2 because same numbers will gives us 0000

var missingNumber3 = (nums) => {
    var res = nums.length
    for (var i = 0; i < nums.length; i++) {
        var xor = i ^ nums[i]
        res = res ^ xor
    }
    return res
}

var nums = [3, 0, 1]
var res = missingNumber3(nums)
console.log(res)