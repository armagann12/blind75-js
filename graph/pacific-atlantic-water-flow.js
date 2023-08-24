// 417. Pacific Atlantic Water Flow
// https://leetcode.com/problems/pacific-atlantic-water-flow/


// Using dfs and Set
var pacificAtlantic = function (heights) {
    var ROWS = heights.length
    var COLS = heights[0].length
    var pac = new Set()
    var atl = new Set()

    var dfs = (r, c, visit, preHeight) => {
        if (visit.has(`${r},${c}`) || r < 0 || c < 0 || r == ROWS || c == COLS || heights[r][c] < preHeight) {
            return
        }
        visit.add(`${r},${c}`)
        dfs(r + 1, c, visit, heights[r][c])
        dfs(r - 1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])
    }
    // First raw 1, 2, 2, 3, 5
    // Last raw 5, 1, 1, 2, 4
    for (c = 0; c < COLS; c++) {
        dfs(0, c, pac, heights[0][c])
        dfs(ROWS - 1, c, atl, heights[ROWS - 1][c])
    }

    // First column 1, 3, 2, 6, 5
    // Last column 5, 4, 1, 5, 4
    for (r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, heights[r][0])
        dfs(r, COLS - 1, atl, heights[r][COLS - 1])
    }

    var res = []
    console.log(atl , pac)
    for (var r = 0; r < ROWS; r++) {
        for (c = 0; c < COLS; c++) {
            if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
                res.push([r, c])
            }
        }
    }
    return res
};