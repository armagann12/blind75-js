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
            if (i === j) {
                continue
            }
            arr[i] *= nums[j]
        }
    }
    return arr
};

// Another solution would be to multiply all and divide the number in index and append to array
// But this is not allowed also this would prevent from succeseding:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0] 


// Using 2 extra arrays -> prefix and postfix to calculate products of the values after and before the index
// Than using the two arrays calculating the value of the indeces respectively
// While we calculate prefix and postfix we use permutation like technique so we just get the product of behind / after value 
// 3 for loops O(n) --> Dont know if last one is neccesarry
var productExceptSelfAlt = (nums) => {
    var arr = []
    var pre = []
    var post = []

    for (var i = 0; i < nums.length; i++) {
        pre[i] = nums[i]
        if (i != 0) {
            pre[i] *= pre[i - 1]
        }
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        post[i] = nums[i]
        if (i != nums.length - 1) {
            post[i] *= post[i + 1]
        }
    }
    for (var i = 0; i < nums.length; i++) {
        var postVal = 1
        var preVal = 1
        if (i != 0) {
            preVal = pre[i - 1]
        }
        if (i != nums.length - 1) {
            postVal = post[i + 1]
        }
        arr[i] = postVal * preVal
    }
    return arr
}

// Similar to the above solution
// With 2 for loops first set the before values to arr but doing that also muliply by the last value that is been set to arr
// Than with the second loop do the same with reverse but this time use a variable because the arr is not just 1 now
// O(n)
// You can always use two for loops its always better than nested for loop

var productExceptSelfAlt2 = (nums) => {
    arr = []
    for (var i = 0; i < nums.length; i++) {
        arr[i] = 1
        if (i != 0) {
            arr[i] *= arr[i - 1] * nums[i - 1]
        }
    }

    var post = 1
    for (var j = nums.length - 1; j >= 0; j--) {
        if (j != nums.length - 1){
            post *= nums[j + 1]
            arr[j] *= post
        }
    }
    return arr
}

// Same as the abopve one but without if clause or -1 +1 statemets (Refactored)
var productExceptSelfAlt3 = (nums) => {
    arr = []
    prefix = 1
    for (var i = 0; i < nums.length; i++) {
        arr[i] = 1
        arr[i] = prefix
        prefix *=nums[i]
    }

    postfix = 1
    for (var j = nums.length - 1; j >= 0; j--) {
        arr[j] *= postfix
        postfix *= nums[j]
    }
    return arr
}

var nums = [1, 2, 3, 4]

var res = productExceptSelfAlt3(nums)

console.log(res)
