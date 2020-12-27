/*
#63 https://leetcode.com/problems/unique-paths-ii (verified)
Time: O(M*N) M: horizontal length, N: vertical length
Space: O(1)
*/

function uniquePathsWithObstacles(obstacleGrid) {
  if(obstacleGrid[0][0] === 1) return 0;

  let hasObstacle = false;
  const firstRow = obstacleGrid[0];
  
  for(let i = 0; i < firstRow.length; i++) {
    if(firstRow[i] === 1 || hasObstacle) {
      hasObstacle = true;
      firstRow[i] = 0;
    } else {
      firstRow[i] = 1;
    }
  }

  hasObstacle = false;

  //first column;
  for(let i = 1; i < obstacleGrid.length; i++) {
    if(obstacleGrid[i][0] === 1 || hasObstacle) {
      obstacleGrid[i][0] = 0
      hasObstacle = true;
    } else {
      obstacleGrid[i][0] = 1;
    }
  }

  //fill the rest of the grid;
  for(let i = 1; i < obstacleGrid.length; i++) {

    for(let j = 1; j < obstacleGrid[0].length; j++) {

      if(obstacleGrid[i][j] === 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      } else if(obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      }

    }

  }

  return obstacleGrid[ obstacleGrid.length - 1 ][ obstacleGrid[0].length - 1 ];

}

module.exports = {uniquePathsWithObstacles};