// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/

var insert = function (intervals, newInterval) {
    var res = []
    for (var i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval)
            while (i != intervals.length) {
                res.push(intervals[i])
                i++
            }
            return res
        }
        else if (newInterval[0] > intervals[i][1]) {
            res.push(intervals[i])
        }
        else {
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
        }
    }
    res.push(newInterval)
    return res
};