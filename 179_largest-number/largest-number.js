/*
https://www.interviewbit.com/problems/shortest-unique-prefix (verified)
Time: O(N Log(N)) N: length of nums
Space: O(1)
*/

function largestNumber(nums) {
  nums = nums.sort((a, b) => (String(b) + String(a)) - (String(a) + String(b))).join('');
  if(Number(nums) === 0) return '0';
  return nums;
}

module.exports = {largestNumber};