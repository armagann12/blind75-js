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
            if (dif > max){
                max = dif
            }
        }
    }
    return max
};



var prices = [7, 1, 5, 3, 6, 4]

var res = maxProfit(prices)

console.log(res)