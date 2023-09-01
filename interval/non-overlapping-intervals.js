// 435. Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/

var eraseOverlapIntervals = function (intervals) {
    // Sorting the interval first
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
        aStart !== bStart ? aStart - bStart : aEnd - bEnd
    );
    
    var res = 0
    var prevEnd = intervals[0][1]
    for (var i = 1; i < intervals.length; i++) {
        var start = intervals[i][0]
        var end = intervals[i][1]
        if(start >= prevEnd){
            prevEnd = end
        }else{
            res++
            prevEnd = Math.min(prevEnd, end)
        }
    }
    return res
};