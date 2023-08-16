// 207. Course Schedule
// https://leetcode.com/problems/course-schedule/

// Recursive dfs
// Graph adjacency list
var canFinish = function (numCourses, prerequisites) {
    var preMap = {}
    for (var i = 0; i < numCourses; i++) {
        preMap[i] = []
    }
    for (var j of prerequisites) {
        preMap[j[0]].push(j[1])
    }
    var visitSet = new Set()
    var dfs = (crs) => {
        if (visitSet.has(crs)) {
            return false
        }
        if (preMap[crs] === []) {
            return true
        }
        visitSet.add(crs)
        for (pre of preMap[crs]) {
            if (!(dfs(pre))) {
                return false
            }
        }
        visitSet.delete(crs)
        preMap[crs] = []
        return true
    }
    for (var t = 0; t < numCourses; t++) {
        if (!(dfs(t))) {
            return false
        }
    }
    return true
};