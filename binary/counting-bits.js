// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/

var countBits = function (n) {
    var res = [0]
    for (var i = 1; i <= n; i++){
        var tmp = i
        var bit = 0
        while(tmp !== 0){
            tmp = tmp & (tmp - 1)
            bit++
        }
        res.push(bit)
    }
    return res
};

var n = 5
var res = countBits(n)
console.log(res)