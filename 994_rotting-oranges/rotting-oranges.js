/*
#994 https://leetcode.com/problems/rotting-oranges (verified)
Time: O(N)
Space: O(N)
*/
function bfs(queue, grid, freshOrangeCount) {
  let minute = 0;

  while (queue.length) {
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {

      const currentGrid = queue.shift();
      const {row, col} = currentGrid;
      
      if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) {
        continue;
      }

      if (grid[row][col] === 1) {
        freshOrangeCount--;
      }

      grid[row][col] = 2;

      // top
      if (row > 0 && grid[row - 1][col] === 1) {
        queue.push({row: row - 1, col});
      }

      // right
      if (col < grid[0].length - 1 && grid[row][col + 1] === 1) {
        queue.push({row, col: col + 1});
      }

      // bottom
      if (row < grid.length - 1 && grid[row + 1][col] === 1) {
        queue.push({row: row + 1, col});
      }

      // left
      if (col > 0 && grid[row][col - 1] === 1) {
        queue.push({row, col: col - 1});
      }

    }

    if (queue.length > 0 && freshOrangeCount > 0) {
      minute++;
    }

  }

  return [minute, freshOrangeCount];
}

function orangesRotting(grid) {
  if (!grid.length) return 0

  let freshOrangeCount = 0;

  const queue = [];
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {

      if (grid[row][col] === 2) {
        queue.push({row, col});
      } else if (grid[row][col] === 1) {
        freshOrangeCount++;
      }

    }
  }

  const [maxMinutes, remainingfreshOranges] = bfs(queue, grid, freshOrangeCount);

  if (remainingfreshOranges > 0) {
    return -1;
  }

  return maxMinutes;

}

module.exports = {orangesRotting}