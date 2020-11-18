/*
#695 https://leetcode.com/problems/max-area-of-island (verified)
Time: O(V * H) V: vertical, E: horizontal
Space: O(I) I Size of islands
*/

function maxAreaOfIsland(grid) {
  let max = 0;
  let area = 0;
  const traverse = (grid, v, h) => {

    grid[v][h] = null;
    area++;

    max = Math.max(max, area);

    //check above
    if(v > 0 && grid[v - 1][h] === 1) {
      traverse(grid, v-1, h)
    }
  
    //check right
    if(h < grid[v].length - 1 && grid[v][h + 1] === 1) {
      traverse(grid, v, h+1);
    }
  
    //check bottom
    if(v < grid.length - 1 && grid[v + 1][h] === 1) {
      traverse(grid, v+1, h);
    }
  
    //check left
    if(h > 0 && grid[v][h - 1] === 1) {
      traverse(grid, v, h-1);
    }

  }

  for(let v = 0; v < grid.length; v++) {
    for(let h = 0; h < grid[v].length; h++) {

      if(grid[v][h] === 1) {
        area = 0;
        traverse(grid, v, h);
      }

    }
  }

  return max;

}

module.exports = {maxAreaOfIsland};