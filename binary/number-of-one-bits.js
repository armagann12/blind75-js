// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/

// O(1) solutions

// Doing & operation with 1 and increment res if it returns 1 --> 1010 & 0001 will return 0 + 0101 & 0001 will return 1
// Than shifting the binary to right
// Wont pass leetcode
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
// Wont pass leetcode
var hammingWeight2 = function (n) {
    var res = 0
    while (n > 0) {
        res += n % 2
        n = n >> 1
    }
    return res
}

// Another Solution: (Hard)
// This works because when we substract 1 from it and do a & operation it will get rid of 1 bit
// So every time it get rids of 1 and add's to the response

var hammingWeight3 = function (n) {
    var res = 0
    while (n !== 0) {
        n = n & (n - 1)
        res++
    }
    return res
}

var n = 128
var res = hammingWeight3(n)
console.log(res)