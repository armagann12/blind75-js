// 15. 3Sum
// https://leetcode.com/problems/3sum/

// Also solve twoSum II

// Brute solution using 3 loops + Also we sort the array first so we can see duplicates and filter
// O(n^3)
// Leetcode not passed because [0,0,0,0]
var threeSum = (nums) => {
    var arr = []
    var sortedNums = nums.sort() // Do it also with sorting algorithms

    for (var i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue
        }
        for (var j = i + 1; j < sortedNums.length - 1; j++) {
            for (var k = j + 1; k < sortedNums.length; k++) {
                if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
                    var tmpArr = [sortedNums[i], sortedNums[j], sortedNums[k]]
                    arr.push(tmpArr)
                }
            }
        }
    }
    return arr
};

// Using one element and doing two sum with hash map for the rest
// O (n^2)
// Leetcode not passed because [0,0,0,0]
var threeSumAlt = (nums) => {
    var arr = []
    var sortedNums = nums.sort()

    for (var i = 0; i < sortedNums.length - 1; i++) {
        var map = {}
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue
        }
        var target = 0 - sortedNums[i]
        for (var j = i + 1; j < sortedNums.length; j++) {
            var dif = target - sortedNums[j]
            if (map.hasOwnProperty(dif)) {
                var tmpArr = [sortedNums[i], sortedNums[map[dif]], sortedNums[j]]
                arr.push(tmpArr)
            }
            map[sortedNums[j]] = j
        }
    }
    return arr
}

// Using one element and doing two sum II (using left right pointer)
// O(n^2)
// Not passed
var threeSumAlt2 = (nums) => {
    var arr = []
    var sortedNums = nums.sort()

    for (var i = 0; i < sortedNums.length - 1; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue
        }
        var left = i + 1
        var right = sortedNums.length - 1

        while (left < right) {
            var sum = sortedNums[i] + sortedNums[left] + sortedNums[right]
            if (sum > 0) {
                right -= 1
            } else if (sum < 0) {
                left += 1
            } else {
                arr.push([sortedNums[i], sortedNums[left], sortedNums[right]])
                left += 1
                while (sortedNums[left] === sortedNums[left - 1] && left < right){
                    left += 1
                }
            }
        }
    }
    return arr
}


var nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]



var res = threeSumAlt(nums)
console.log(res)
