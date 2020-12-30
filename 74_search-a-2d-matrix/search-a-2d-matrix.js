/*
#74 https://leetcode.com/problems/search-a-2d-matrix (verified)
*/

/*
Iterate rows and columns and eliminate rows 
that the number has no chance of being in.

Time: O(W * H) W: length of width, H: length of height (worst case) 
Space: O(1)
*/
function _searchMatrix(matrix, target) {
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

/*
After isolating on a single array where the target may be in,
Use binary search on both dimensions to eliminate areas more efficiently

Time: O(log(W * H)) W: length of width, H: length of height (worst case) 
Space: O(W)
*/
function searchMatrix(matrix, target) {
  if(!matrix.length) return false;

  let arr = null;

  //find array where target may be in
  for(const array of matrix) {
    if(array[0] <= target && target <= array[array.length-1]) {
      arr = array;
    }
  }

  if(!arr) return false;

  //do binary search on arr
  let min = 0;
  let max = arr.length - 1;

  while(min <= max) {
    if(arr[min] === target || arr[max] === target) {
      return true;
    }
    min++;
    max--;

    let mid = Math.floor((min + max) / 2);

    if(arr[mid] < target) {
      min = mid + 1;
    } else if(arr[mid] > target) {
      max = mid - 1;
    } else {
      return true;
    }

  }

  return false;

}

module.exports = {searchMatrix};