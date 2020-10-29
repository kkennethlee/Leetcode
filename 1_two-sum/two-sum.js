/*
https://leetcode.com/problems/two-sum (verified)

Time: O(N) N: length of nums parameter
Space: O(N)
*/

function twoSum(nums, target) {
  let hash = {};
  for(let i = 0; i < nums.length; i++) {
    let number = nums[i];
    let diff = target - number;
    
    if(hash.hasOwnProperty(diff)) {
      return [hash[diff], i];;
    }

    hash[number] = i;
  }
  return null;
}

module.exports = {twoSum};