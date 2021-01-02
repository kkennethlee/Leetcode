/*
#45 https://leetcode.com/problems/jump-game-ii
*/

/*
Dynamic programming
Time: O(N^2) N: number of array
Space: O(N)
*/
function jump(nums) {
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

  return jumps[jumps.length - 1];
}

module.exports = {jump}