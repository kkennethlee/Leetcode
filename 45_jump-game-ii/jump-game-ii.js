/*
#45 https://leetcode.com/problems/jump-game-ii (verified)
*/

/*
  Dynamic programming
  Time: O(N^2) N: number of nums
  Space: O(N)
*/
function _jump(nums) {
  const jumps = new Array(nums.length).fill(Infinity);
  jumps[0] = 0;

  for(let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let current = jumps[i];

    for(let j = 1; j <= n; j++) {
      if(jumps[i + j]) {
        jumps[i + j] = Math.min(jumps[i + j], current + 1);
      }
    }
  }

  if(jumps[jumps.length - 1] === Infinity) return 0;
  return jumps[jumps.length - 1];
}

/*
  Partial greedy solution
*/
function __jump(nums) {
  //no jump available or needed
  if(!nums[0] || nums.length === 1) return 0;

  let farthest = 0;
  let steps = 0;

  for(let i = 0; i < nums.length; i++) {
    if(i === 0) {
      farthest = nums[0] + i;
      steps = 1;
    } else {

      if(i + nums[i] > farthest) {
        farthest = i + nums[i];
        steps++;
      } else if(nums[i] === 0 && i === farthest) {
        return 0;
      }

    }

    if(farthest >= nums.length - 1) {
      return steps;
    }
  }

  return 0;
}

/*
  Time: O(N) N: number of nums
  Space: O(1)
*/
function jump(nums) {
  if(!nums[0] || nums.length === 1) return 0;
  let begin = 0;
  let currentMaxRange = nums[begin];
  let jump = 1;

  let nextMaxRange = 0;

  while(currentMaxRange < nums.length - 1) {
    
    for(let i = begin + 1; i <= currentMaxRange; i++) {
      nextMaxRange = Math.max(nextMaxRange, i + nums[i]);
    }

    begin = currentMaxRange;
    currentMaxRange = nextMaxRange;
    jump++;

    nextMaxRange = 0;
  }

  return jump;
}

module.exports = {jump}