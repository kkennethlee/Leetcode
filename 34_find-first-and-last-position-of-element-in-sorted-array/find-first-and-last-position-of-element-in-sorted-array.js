/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ (verified)
*/

/*
Time: O(N) N: length of nums array
Space: O(1)

Achieve time complexity of O(N) with iterative solution
*/
function _searchRange(nums, target) {
  let output = [];
  if(!nums.length) {
    return [-1, -1];
  }

  for(let i = 0; i < nums.length; i++) {
    //check for 1st number
    if(nums[i] === target && output[0] === undefined) {
      output[0] = i;
    } else if(nums[i] === target && output[0] !== undefined) {
      output[1] = i;
    }
  }

  return (output.length) ? output : [-1, -1];
}

/*
Time: O(LogN) N: length of nums array
Space: O(1)

Achieve time complexity of O(LogN) with binary search
*/
function searchRange(nums, target) {
  if(!nums.length) {
    return [-1, -1];
  }
  let left = 0;
  let middle = Math.floor(nums.length / 2);
  let right = nums.length - 1;

  while(nums[middle] !== target) {
    if(nums[left] === target) {
      middle = left;
      break;
    } else if (nums[right] === target) {
      middle = right;
      break;
    }

    if(nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle;
    }
    middle = Math.floor((left + right) / 2);

    if(nums[middle] !== target && (left === middle || right === middle)) {
      return [-1, -1];
    }
  }

  //look leftwards to find the end.
  let leftward = middle;
  while(nums[leftward - 1] === target) {
    leftward--;

  }

  //look rightwards to find the end.
  let rightward = middle;
  while(nums[rightward + 1] === target) {
    rightward++;
  }

  return [leftward, rightward];
}

module.exports = {searchRange};