// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Done

// O(n) solution
// Looping through all of the array and finding the smallest

var findMin = (nums) => {
    var min = nums[0]
    for (var i = 0; i < nums.length; i++) {
        if (min > nums[i]) {
            min = nums[i]
        }
    }
    return min
};

// O(n) solution
// Looping through the array and if something is smaller returning right away
var findMinAlt = (nums) => {
    var min = nums[0]
    for (var i = 0; i < nums.length; i++) {
        if (min > nums[i]) {
            min = nums[i]
            return min
        }
    }
    return min
};

// O(log n) solution Binary Search

var findMinAlt2 = (nums) => {
    var min = nums[0]
    var left = 0
    var right = nums.length - 1
    while (left <= right) {
        if (nums[left] < nums[right]) {
            min = Math.min(min, nums[left])
            break
        }
        var middle = Math.round((left + right) / 2)
        min = Math.min(min, nums[middle])
        if (nums[left] >= nums[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return min
};

var nums = [4, 5, 6, 7, 0, 1, 2]

var res = findMinAlt2(nums)
console.log(res)