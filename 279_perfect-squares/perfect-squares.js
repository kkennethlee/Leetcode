/*
#279 https://leetcode.com/problems/perfect-squares (verified)
Time: O(N * Log(N)) N: number
Space: O(N)
*/

function numSquares(n) {

  let ways = [0];
  let squares = [];

  for(let i = 1; i <= n; i++) {

    if(Number.isInteger(i ** 0.5)) {
      squares.push(i);
    
      ways[i] = 1;
    } else {
      for(const square of squares) {
        const division = Math.floor(i / square);
        const remainder = i % square;

        const way = division + ways[remainder];

        if(ways[i] === undefined) {
          ways[i] = way;
        } else {
          ways[i] = Math.min(ways[i], way);
        }
      }
    }
  }

  return ways[n];
}

module.exports = {numSquares};