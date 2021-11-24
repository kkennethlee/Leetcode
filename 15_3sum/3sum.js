/*
#15 https://leetcode.com/problems/3sum/ (verified)

Time: O(N^2 + NLog(N)) N: length of node 
Space: O(N)
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b);
    
  let sums = [];
    
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) {
        continue;
    }
    
    let start = i + 1;
    let end = nums.length - 1;
      
    while (start < end) {
      const currentSum = nums[start] + nums[i] + nums[end];

      if (currentSum > 0) {
          end--;
      } else if (currentSum < 0) {
          start++;
      } else {
          sums.push([nums[i], nums[start], nums[end]]);
          end--;
          while (start < end && nums[end] === nums[end + 1]) {
              end--;
          }
          start++;
          while (start < end && nums[start] === nums[start - 1]) {
              start++;
          }
      }
        
    }
      
  }

  return sums;

}

module.exports = {threeSum};