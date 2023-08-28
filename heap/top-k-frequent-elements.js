// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

// Using hashmap
var topKFrequent = function (nums, k) {
    var hash = {}
    for (var num of nums) {
        if(hash[num] === undefined){
            hash[num] = 1
        }else hash[num]++

    }
    var res = []
    while (k!= 0){
        var vals = Object.values(hash)
        var max_val = Math.max(...vals)
        var key = Object.keys(hash).find(key => hash[key] === max_val);
        console.log(key)
        res.unshift(key)
        delete hash[key]
        k--
    }
    return res
};