// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/


// Using nested for loops (Brute force)
// O(n^2)
var containsDuplicate = function (nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
};

//Using a hashmap
var containsDuplicateAlt = (nums) =>{
    map = {}
    for(var i in nums){
        if(map[nums[i]] === 1){
            return true
        }else{
            map[nums[i]] = 1
        }
    }
    return false
}

var nums = [1, 2, 3, 1]
var res = containsDuplicate(nums)

console.log(res, "res")

var resAlt = containsDuplicateAlt(nums)

console.log(resAlt)
