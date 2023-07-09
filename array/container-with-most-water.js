// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
// Done

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

// Two pointer
// Optimal Solution with left right pointer similar to above one
// O(n)

var maxAreaAlt = (height) => {
    var area = 0
    var left = 0
    var right = height.length - 1
    while (left < right) {
        var x = right - left
        if (height[left] > height[right]) {
            var y = height[right]
            right--
        } else {
            var y = height[left]
            left++
        }
        if ((x * y) > area) {
            area = x * y
        }
    }
    return area
}

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var res = maxAreaAlt(height)
console.log(res)