/*
#62 https://leetcode.com/problems/unique-paths (verified)
Time: O(h * v) h: horizontal length, v: vertical length
Space: O(h * v)
*/

function uniquePaths(m, n) {
  let board = [];

  for(i = 0; i < m; i++) {
    if(i === 0) {
      board[0] = new Array(n).fill(1);
    } else {
      board[i] = [];
      board[i][0] = 1;
    }
  }

  for(let v = 1; v < board.length; v++) {
    for(let h = 1; h < board[0].length; h++) {
      board[v][h] = board[v - 1][h] + board[v][h - 1];
    }
  }

  return board[board.length -1][board[0].length - 1];
}

module.exports = {uniquePaths}