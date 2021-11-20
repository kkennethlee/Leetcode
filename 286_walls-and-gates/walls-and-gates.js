/*
#286 https://leetcode.com/problems/walls-and-gates (locked)
Time: O(N)
Space: O(N)
*/

function bfs(grid, coordinate) {
  const queue = [coordinate];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {

      const currentCoordinate = queue.shift();
      const {row, col} = currentCoordinate;

      if (row < 0 || row > grid.length -1 || col < 0 || col > grid[0].length - 1 || grid[row][col] === -1) {
        continue;
      }

      // search up
      if (row > 0 && grid[row-1][col] > 0 && grid[row][col] + 1 < grid[row - 1][col]) {
        grid[row - 1][col] = grid[row][col] + 1;
        queue.push({row: row - 1, col});
      }

      // search right
      if (col < grid[0].length - 1 && grid[row][col + 1] > 0 && grid[row][col] + 1 < grid[row][col + 1]) {
        grid[row][col + 1] = grid[row][col] + 1;
        queue.push({row, col: col + 1});
      }

      // search down
      if (row < grid.length - 1 && grid[row + 1][col] > 0 && grid[row][col] + 1 < grid[row + 1][col]) {
        grid[row + 1][col] = grid[row][col] + 1;
        queue.push({row: row + 1, col});
      }

      // search left
      if (col > 0 && grid[row][col - 1] > 0 && grid[row][col] + 1 < grid[row][col - 1]) {
        grid[row][col - 1] = grid[row][col] + 1;
        queue.push({row, col: col - 1});
      }

    }

  }

}

function wallsAndGates(grid) {
  if (!grid.length || !grid[0].length) return grid;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col]  ===  0 ) {
        bfs(grid, {row, col});
      }
    }
  }

  return grid;

}

module.exports = {wallsAndGates}