/*
#74 https://leetcode.com/problems/search-a-2d-matrix (verified)
Time: O(W * H) W: length of width, H: length of height (worst case) 
Space: O(1)
*/

function searchMatrix(matrix, target) {
  if(!matrix.length) return false;

  //iterate from x to 0; decrement
  let x = matrix[0].length - 1;

  //iterate from 0 to height; increment;
  let height = matrix.length - 1;
  
  while(x >= 0) {
    
    let y = 0;

    while(y <= height) {

      if(matrix[y][x] === target) {
        return true;
      } else if(matrix[y][x] > target) {
        height = y;
      }

      y++;
    }

    x--;
  }

  return false;
}

module.exports = {searchMatrix};