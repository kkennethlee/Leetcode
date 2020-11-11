/*
#200 https://leetcode.com/problems/number-of-islands/ (verified)
Time: O(V * H) V: vertical of grid, H: horizontal of grid
Space: O(N) N: size of island
*/

function traverseIsland(grid, v, h) {
  grid[v][h] = true;

  //check above
  if(v > 0 && grid[v - 1][h] === "1") {
    traverseIsland(grid, v - 1, h);
  }

  //check right
  if(h < grid[v].length - 1 && grid[v][h + 1] === '1') {
    traverseIsland(grid, v, h + 1)
  }

  //check bottom
  if(v < grid.length - 1 && grid[v + 1][h] === '1') {
    traverseIsland(grid, v + 1, h);
  }

  //check left
  if(h > 0 && grid[v][h - 1] === "1") {
    traverseIsland(grid, v, h - 1);
  }

}

function numIslands(grid) {

  let islands = 0;

  for(let v = 0; v < grid.length; v++) {

    for(let h = 0; h < grid[v].length; h++) {
      if(grid[v][h] === '1') {
        traverseIsland(grid, v, h);
        islands++;
      }
      
    }
  }

  return islands;
}

module.exports = {numIslands};