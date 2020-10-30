/*
#15 https://leetcode.com/problems/3sum/

Time: O(N^2 NLog(N)) N: length of node 
Space: O(N)
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;

  let sums = [];

  //hash is used to prevent storing duplicate combination
  let hash = {};

  while(start < end) {
    let index = start + 1;
    while(index < end) {

      let sum = nums[start] + nums[index] + nums[end]; //-4, -1, 2 = -3
      if(sum > 0) {
        end--;
        index = start + 1;
      } else if (sum < 0) {
        index++;
      } else {
        let combo = [nums[start], nums[index], nums[end]];
        if(!hash.hasOwnProperty(combo)) {
          hash[combo] = true;
          sums.push(combo);
        }
        
        index++;
      }
    }
    start++;
    end = nums.length - 1;
  }

  return sums;

}

module.exports = {threeSum};