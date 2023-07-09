// 371. Sum of Two Integers
// https://leetcode.com/problems/sum-of-two-integers/

// Bit manipulation
// Using bitwise operators: XOR, AND, left carry
// O(1)

// First we are using XOR for 00, 10, 01 values which will result 0, 1, 1
// Than for 11 we use and operator and shift to left
// We do this until there nothing to carry
var getSum = (a, b) => {
    while (b !== 0) {
        var xor = a ^ b // Bitwise operator (^ XOR)
        var carry = ((a & b) << 1) // Bitwise operator (& AND), (<< left carry)

        a = xor
        b = carry
    }
    return a
};

var a = 1 // 01
var b = 2 // 10

var res = getSum(a, b)
console.log(res)
