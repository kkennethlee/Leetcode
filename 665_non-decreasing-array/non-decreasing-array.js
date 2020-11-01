/*
#665 https://leetcode.com/problems/non-decreasing-array/ (verified)
Time: O(N) N: length of nums
Space: O(1)
*/

function checkPossibility(nums) {
  let changed = false;
  for(let current = 1; current < nums.length; current++) {
    let start = current - 1;
    let next = current + 1;
    
    if(nums[start] > nums[current] && nums[current] > nums[next]) {
      return false;
    } else if(nums[start] > nums[current] || nums[current] > nums[next]) {
      if(changed) return false;

      //make necessary changes

      //dip or peak
      if(nums[start] <= nums[next]) {
        nums[current] = nums[start];
      //leads with downward trend
      } else if(nums[start] > nums[current]) {
        nums[start] = nums[current];
      //tails with downward trend
      } else if(nums[current] > nums[next]) {
        nums[next] = nums[current];
      }

      changed = true;
    }
    start++;
  }
  return true;
}

module.exports = {checkPossibility};