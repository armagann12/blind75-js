// 15. 3Sum
// https://leetcode.com/problems/3sum/

// Brute solution using 3 loops + Also we sort the array first so we can see duplicates and filter
// O(n^3)
// Leetcode not passed for some reason?
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

var nums = [0, 0, 0]

var res = threeSum(nums)
console.log(res)
