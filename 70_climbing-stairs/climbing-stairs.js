/*
#70 https://leetcode.com/problems/climbing-stairs (verified)
Time: O(N) N: number of n
Space: O(N)
*/

function climbStairs(n) {
  let ways = [1, 1, 2];
  if(n <= 2) return ways[n];

  for(let i = 3; i <= n; i++) {
    ways[i] = ways[i-1] + ways[i-2];
  }

  return ways[n];
}

module.exports = {climbStairs};