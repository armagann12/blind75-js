// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/


// Brute force with 2 loops
// O(n^2)
// Time Limit exceeded

var maxArea = (height) => {
    var area = 0

    for (var i = 0; i < height.length - 1; i++) {
        for (var j = i + 1; j < height.length; j++) {
            var x = j - i
            if (height[i] > height[j]) {
                var y = height[j]
            } else {
                var y = height[i]
            }
            if ((x * y) > area) {
                area = x * y
            }
        }
    }

    return area
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var res = maxArea(height)
console.log(res)