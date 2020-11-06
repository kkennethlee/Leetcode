/*
#41 https://leetcode.com/problems/first-missing-positive
*/

/*
Time: O(NLog(N))
Space: O(1)
*/
function _firstMissingPositive(nums) {
  nums.sort((a, b) => a > b);

  if(nums[0] > 1 ) return 1;
  
  let firstMissingPositiveInteger = null;

  for(let i = 0; i < nums.length; i++) {
    firstMissingPositiveInteger = nums[i] + 1;

    if(firstMissingPositiveInteger === 0) {
      firstMissingPositiveInteger++; //1
    }

    if(firstMissingPositiveInteger === nums[i+1]) {
      continue;
    } else {
      break;
    }
  }

  return firstMissingPositiveInteger;

}


/*
Time: O(N) N: length of nums array
Space: O(N)
*/
function firstMissingPositive(nums) {

  if(nums.length === 1) {
    return (nums[0] < 0 || nums[0] > 1) ? 1 : nums[0] + 1;
  }
  
  let min = Infinity;
  let max = -Infinity;
  let hash = {};

  for(let i = 0; i < nums.length; i++) {
    const n = nums[i]
    hash[n] = true;

    if(n >= 0) {
      min = Math.min(min, n);
    }

    max = Math.max(max, n);
  }

  if(max <= 0 || min > 1) return 1;

  let firstMissingPositiveInteger = null;

  while(firstMissingPositiveInteger === null) {
    if(!hash.hasOwnProperty(min + 1) && min + 1 !== 0) {
      firstMissingPositiveInteger = min + 1;
    }

    min++;
  }


  return firstMissingPositiveInteger;

}


module.exports = {firstMissingPositive};