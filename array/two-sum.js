// Using nested for loop
var twoSum = function (nums, target) {
    var arr = []
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push(i, j)
                return arr
            }
        }
    }
    return arr
};

var nums = [2, 7, 11, 15]
var target = 22

var res = twoSum(nums, target)
console.log(res)