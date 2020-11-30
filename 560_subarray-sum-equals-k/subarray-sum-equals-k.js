/*
#560 https://leetcode.com/problems/subarray-sum-equals-k
*/

/*
Brute force method
Time: O(N^2) N: number of nums
Space: O(1)
*/
function _subarraySum(num, k) {
  let count = 0;
  let sum = 0;
  for(let i = 0; i < num.length; i++) {
    sum = num[i];

    //check single element
    if(sum === k) {
      count++;
    }

    for(let j = i + 1; j < num.length; j++) {
      sum += num[j];
      if(sum === k) {
        count++;
      }
    }
  }

  return count;
}

/*
iterative method
Time: O(N) N: number of nums
Space: O(N)
*/
function subarraySum(nums, k) {
  let sum = 0;
  let result = 0;
  let hash = {0: 1}
      
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (hash[sum - k]) {
        result += hash[sum - k];
    }
    
    if(!hash.hasOwnProperty(sum)) {
      hash[sum] = 0;
    }
    hash[sum]++;
  }
      
  return result;
}

module.exports = {subarraySum}