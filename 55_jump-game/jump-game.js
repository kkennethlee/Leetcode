/*
#55 https://leetcode.com/problems/jump-game (verified)
Time: O(N^2) N: number of nums
Space: O(N);
*/

function canJump(nums) {

  const n = nums.length;

  if(n === 1) return true;

  let jumps = new Array(n).fill(Infinity);
  jumps[0] = 0;

  for(let i = 0; i < n; i++) {

    const range = nums[i];
    let current = jumps[i];

    for(let j = 1; j <= range; j++ ) {
      if(jumps[i + j]) {
        jumps[i + j] = Math.min(jumps[i + j], current + 1);
      }
      
      if(jumps[jumps.length-1] !== Infinity) return true;
    }

  }

  return false;

}

module.exports = {canJump};