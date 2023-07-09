// 1. Two Sum
// https://leetcode.com/problems/two-sum/
// Done 


// Using nested for loop
// O(n^2)
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

// Using a hash map (One pass solution) --> !! Most optimal solution we dont initialize hashmap we look as we go 
// O(n)

var twoSumAlt = function (nums, target) {
    arr = []
    map = {}
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i]
        if (map.hasOwnProperty(dif)){
            return[map[dif], i]
        }
        map[nums[i]] = i
    }
    return arr
}

var nums = [2, 7, 11, 15]
var target = 22

var res = twoSum(nums, target)
console.log(res)

var resAlt = twoSumAlt(nums, target)
console.log(resAlt, "onepass")