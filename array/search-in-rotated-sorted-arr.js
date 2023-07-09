// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
// Done

// O(n) solution using a for loop
var search = (nums, target) => {
    var res = -1
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res = i
        }
    }
    return res
};

// O(log n) Binary search using comparison logic
// My solution
var searchAlt = (nums, target) => {
    var res = -1
    var left = 0
    var right = nums.length - 1
    while (left <= right) {
        var mid = Math.round((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[left] === target) {
            return left
        } else if (nums[right] === target) {
            return right
        }
        console.log(left, right, mid)
        if (nums[left] > nums[mid]) {
            if (target > nums[left]) {
                right = mid - 1
            } else if (target < nums[mid]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        } else {
            if (target < nums[left]) {
                left = mid + 1
            } else if (target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return res
}


//You can also refactor this 
// With no left right check and adding & statement to if conditions


var nums = [7, 8, 1, 2, 3, 4, 5, 6]
var target = 2

var res = searchAlt(nums, target)
console.log(res)