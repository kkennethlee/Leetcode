/*
#209 https://leetcode.com/problems/minimum-size-subarray-sum
Time: O(N) N: number of nums
Space: O(1)
*/

function minSubArrayLen(s, nums) {
  let minLength = Infinity;
  let windowSum = 0;
  let start = 0;

  if(!nums.length) return [];

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === s) return 1;
    windowSum += nums[i];

    while(windowSum >= s) {
      minLength = Math.min(i - start + 1, minLength);
      windowSum -= nums[start];
      start++;
    }

  }

  if(minLength === Infinity) minLength = 0;

  return minLength;
}


module.exports = {minSubArrayLen};