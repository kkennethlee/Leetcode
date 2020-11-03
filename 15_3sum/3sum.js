/*
#15 https://leetcode.com/problems/3sum/

Time: O(N^2 + NLog(N)) N: length of node 
Space: O(N)
*/

function _threeSum(nums) {
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

function checkHash(hash, sums, number) {
  if(hash.hasOwnProperty(number)) {
    const combination = hash[number];
    combination[1] = number;
    sums.push(combination);

    delete hash[number]
  }
}

function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;

  let sums = [];
  //[[[-1, -1, 2]] ]

  let hash = {};
  /*
  {
    2: [-4, null, 2]
    -1: [-1, -1, 2]
  }

  */

  while(start < end) {//1 < 4
    const twoSum = nums[start] + nums[end]; //-1 + 2 = 1
    const numberThatWeNeed = 0 - twoSum;//-1

    if(!hash.hasOwnProperty(numberThatWeNeed)) {
      hash[numberThatWeNeed] = [nums[start], null, nums[end]]
    } 

    if(twoSum > 0) {
      end--;
      checkHash(hash, sums, nums[end]);
    } else if(twoSum < 0) {
      start++;
      checkHash(hash, sums, nums[start]);
    } else {
      end--;
      start++;
      checkHash(hash, sums, nums[start]);
      checkHash(hash, sums, nums[end]);
    }

  }

  return sums;
}

module.exports = {threeSum};