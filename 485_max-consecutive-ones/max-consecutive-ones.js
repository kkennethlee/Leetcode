/*
#485 https://leetcode.com/problems/max-consecutive-ones (verified)
Time: O(N) N: size nums
Space: O(1)
*/

function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;

  for(let i = 0; i < nums.length; i++) {

    if(nums[i] === 0) {
      count = 0;
    } else {
      count++;
      max = Math.max(max, count);
    }
  }

  return max;
}

module.exports = {findMaxConsecutiveOnes};