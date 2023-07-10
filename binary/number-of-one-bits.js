// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/

// O(1) solutions

// Doing & operation with 1 and increment res if it returns 1 --> 1010 & 0001 will return 0 + 0101 & 0001 will return 1
// Than shifting the binary to right
var hammingWeight = function (n) {
    var res = 0
    while (n > 0) {
        var one = n & 1
        if (one === 1) {
            res++
        }
        n = n >> 1 // --> Also dividing by 2 shifts the element by one
    }
    return res
};

// Getting the mod of 2 of the number --> if its 0 it will add 0 so none + if its 1 it will be 1 so add 1
// Than shifting the binary to right
var hammingWeight2 = function (n) {
    var res = 0
    while (n > 0) {
        res += n % 2
        n = n >> 1
    }
    return res
}

var n = 128
var res = hammingWeight2(n)
console.log(res)