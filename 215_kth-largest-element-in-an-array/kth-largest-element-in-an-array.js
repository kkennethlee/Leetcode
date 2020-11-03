/*
#215 https://leetcode.com/problems/kth-largest-element-in-an-array (verified)
*/

/*
Brute Force Method
Time: O(NLog(N)) N: length of nums
Space: O(1)
*/
function _findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

/*
Time: O(N + D) N: length of nums, D: difference between max number and min number
Space: O(N)
*/
function findKthLargest(nums, k) {
  let hash = {};

  let max = -Infinity;
  let min = Infinity;

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    max = Math.max(max, num);
    min = Math.min(min, num);

    if(!hash[num]) {
      hash[num] = 0;
    }
    hash[num]++;
  }

  let count = 0;
  for(let i = max; i >= min; i--) {
    if(hash.hasOwnProperty(i)) {
      count += hash[i];
      if(count >= k) {
        return i;
      }
    }
  }
}


module.exports = {findKthLargest}