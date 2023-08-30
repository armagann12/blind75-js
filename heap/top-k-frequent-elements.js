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

// My hashmap solution but refactored version
var topKFrequent2 = function(nums, k) {
    // results array
    let results = [];
    
    // 1) first step is to build a hash map, where "element -> its frequency"
    // it costs O(n), where n is nums.length
    let map = {};
    nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1);
    
    // 2) sort the map keys array based on its frequency
    // it costs O(n log n), where n is nums.length
    let sortedKeys = Object.keys(map).sort((a,b)=>map[b]-map[a]);
    
    // 3) take first k results
    for(let i = 0; i < k; i++){
        results.push(sortedKeys[i]);
    }
    
    // as result we have O(n Log n) where n is length of nums
    return results;
};

// Using bucket sort
// https://www.youtube.com/watch?v=YPTqKIgVk-k&t=235s