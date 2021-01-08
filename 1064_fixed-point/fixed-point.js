/*
#1064 https://leetcode.com/problems/fixed-point (locked)
Time: O(Log(N))
Space: O(1)
*/

//used binary seach to find the fixed point
function fixedPoint(A) {

  let l = 0;
  let r = A.length - 1;

  while(l <= r) {
    let m = Math.floor( (l + r) / 2 );

    if(m < A[m]) {
      r = m - 1;
    } else if(m > A[m]) {
      l = m + 1;
    } else {
      return m;
    }
  }

  return -1;
}

module.exports = {fixedPoint};