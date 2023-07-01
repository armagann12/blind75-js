// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


// Brute Force 
// O(n^2)
// With a nested array find the max
// Leetcode error => Time Limit Exceeded
var maxProfit = (prices) => {
    max = 0
    for (var i = 0; i < prices.length - 1; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            var dif = prices[j] - prices[i]
            if (dif > max) {
                max = dif
            }
        }
    }
    return max
};

//My solution idk
// O(n) ? 
// With a loop collect the difs and append to array
// Get the max profit from that array
// Leetcode passed
// Similar to optimal but needs more thinking for edge case to prevent adding it to array 
var maxProfitAlt = (prices) => {
    min = 10001
    max = 0
    arr = []
    for (var i in prices) {
        if (prices[i] < min) {
            min = prices[i]
            max = prices[i]
        }
        if (prices[i] > max) {
            max = prices[i]
        }
        dif = max - min
        arr[i] = dif
    }
    var maxProfit = 0
    for (var j in arr) {
        if (arr[j] > maxProfit) {
            maxProfit = arr[j]
        }
    }
    return maxProfit
}

// Two Pointer technique
// Sliding window !!
// O(n) optimal
// With one for loop: if l < r check for max else slide l to r
// Whatever happense slide r to one at the end 

var maxProfitAlt2 = (prices) => {
    var max = 0
    var left = 0
    var right = 1
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[left] < prices[right]) {
            dif = prices[right] - prices[left]
            if (dif > max) {
                max = dif
            }
        } else {
            left = right
        }
        right++
    }
    return max
}

var prices = [7, 1, 5, 3, 6, 4]

var res = maxProfitAlt2(prices)

console.log(res)