// 190. Reverse Bits
// https://leetcode.com/problems/reverse-bits/

//Doesnt work do it again

var reverseBits = function (n) {
    var res = 0
    for (var i = 0; i < 32; i++) {
        var bit = (n >>> i) & 1
        res += (bit << (31 - i))
    }
    return res
};

var n = 15
var res = reverseBits(n)
console.log(res)