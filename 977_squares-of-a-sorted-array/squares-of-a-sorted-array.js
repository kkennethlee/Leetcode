/*
#977 https://leetcode.com/problems/squares-of-a-sorted-array (verified)
*/

/*
Brute Force Method
Time: O(N Log(N)) N: number of nums
Space: O(1)
*/
function _sortedSquares(nums) {
  nums.forEach((n, i) => {
    nums[i] = n**2;
  });
  nums.sort((a, b) => a - b);
  return nums
}

/*
Iterative Method
Time: O(N) N: number of nums
Space: O(N)
*/
function sortedSquares(nums) {
  let squares = [];

  let pt = 0;

  //[3, 7]
  while(Number.isInteger(nums[pt]) && nums[pt] < 0) {
    nums[pt] *= -1;
    pt++;
  }

  let nPt = (Number.isInteger(pt)) ? pt - 1 : nums.length - 1;

  
  if(nPt < 0) {
    //if only positive numbers exist
    while(pt < nums.length) {
      let n = nums[pt] ** 2;
      squares.push(n);
      pt++;
    }

  } else if(nums[pt] === undefined) {
    //if only negative numbers exist
    while(nPt > -1) {
      let n = nums[nPt] ** 2;
      squares.push(n);
      nPt--;
    }

  } else {
    //if both negative and postive numbers exist
    while(nPt > -1 || pt < nums.length) {

      let n = null;
  
      if(nums[pt] <= nums[nPt] || nPt < 0) {
        n = nums[pt] ** 2;
        pt++;
      } else if(nums[pt] > nums[nPt] || pt >= nums.length) {
        n = nums[nPt] ** 2;
        nPt--;
      }
  
      squares.push(n);
    }

  }

  return squares;
}

module.exports = {sortedSquares}