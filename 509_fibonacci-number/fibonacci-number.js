/*
#509 https://leetcode.com/problems/fibonacci-number (verified)
*/

/*
Recursive Method
Time: O(2^N)
Space: O(N)
*/
function _fib(N) {
  if(N <= 1) {
    return N;
  }
  return fib(N - 1) + fib(N - 2);
}

/*
Iterative Method
Time: O(N)
Space: O(N)
*/
function fib(N) {
  const f = [0, 1];

  for(let i = 2; i <= N; i++) {
    const prev = f[i-1];
    const pprev = f[i-2];
    f.push(prev + pprev);
  }

  return f[N];
}

module.exports = {fib}