/*
#53 https://leetcode.com/problems/maximum-subarray (verified)
*/

/*
Brute Force Solution
Time: O(N^2) N: length of nums
Space; O(1)
*/
function __maxSubArray(nums) {
  if(!nums.length) return 0;
  if(nums.length === 1) return nums[0];

  let maxSum = -Infinity;
  let currentSum = null;
  let indexes = [];

  //start       0
  //end         3
  //currentSum  0
  //maxSum      0
  //indexes     [0, 3];
  for(let start = 0; start < nums.length; start++) {

    currentSum = nums[start];
    if(currentSum > maxSum) {
      maxSum = currentSum;
      indexes = [start, start];
    }

    for(let end = start + 1; end < nums.length; end++) {

      currentSum += nums[end];
      
      if(currentSum > maxSum) {
        maxSum = currentSum;
        indexes = [start, end];
      }

    }

  }

  return maxSum;
}

/*
Kadane's Algorithm
Time: O(N) N: length of nums
Space; O(1)
*/
function maxSubArray(nums) {

  let maxSum = nums[0];

  for(let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const sum = prev + nums[i];

    nums[i] = Math.max(sum, nums[i]);
    maxSum = Math.max(maxSum, nums[i]);
  }

  return maxSum;
}

module.exports = {maxSubArray};