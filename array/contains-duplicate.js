// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/


// Using nested for loops (Brute force)
// O(n^2)
// Memory O(1)
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
// O(n)
// Memory O(n)
var containsDuplicateAlt = (nums) =>{
    map = {}
    for(var i in nums){
        // We can also check map.hasOwnProperty(nums[i])
        if(map[nums[i]] === 1){
            return true
        }else{
            map[nums[i]] = 1
        }
    }
    return false
}

// Another Solution:
// Sorting the array and using just one for loop checking if side by side numbers is equal
// O(nlogn) -> Because of sorting

var nums = [1, 2, 3, 1]
var res = containsDuplicate(nums)

console.log(res, "res")

var resAlt = containsDuplicateAlt(nums)

console.log(resAlt)
