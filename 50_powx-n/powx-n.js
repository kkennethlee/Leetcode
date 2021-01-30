/*
https://leetcode.com/problems/powx-n (verified)
*/

/*
  Time: O(N) N: number of n
  Space: O(1)
*/
function _myPow(x, n) {
  if(n === 0) return 1;

  if (x === 1) {
    return 1;
  } else if (x === -1) {
    if (n % 2 === 0) {
      return 1;
    }
    return -1;
  }

  let product = 1;

  for(let i = 1; i <= Math.abs(n); i++) {
    product *= x;
  }

  if(n < 0) {
    return 1 / product;
  }

  return product;

}

module.exports = {myPow};