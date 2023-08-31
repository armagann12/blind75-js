// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

// Sorting than solving
var merge = function (intervals) {
    // Sorting the interval first
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
        aStart !== bStart ? aStart - bStart : aEnd - bEnd
    );
    var res = [intervals[0]]
    for (var i = 0; i < intervals.length; i++) {
        var start = intervals[i][0]
        var end = intervals[i][1]
        var lastEnd = res[res.length - 1][1]
        if(lastEnd >= start){
            res[res.length - 1][1] = Math.max(lastEnd, end)
        }else{
            res.push([start, end])
        }
    }
    return res
}