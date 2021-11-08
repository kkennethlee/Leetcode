/*
#1249 https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses (verified)
Time: O(4N) -> O(N);
Space: O(2N) -> O(N);
*/

function minRemoveToMakeValid(s) {
  // (a(b(c)d) -> a(b(c)d)

  // letters:       [a, b, c, d] 
  // open p:        [2]
  // matching p:    [[4,6]]

  const res = s.split('');

  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  // Time: O(N)
  while (stack.length) {
    const index = stack.pop();
    res[index] = '';
  }


  return res.join('');
}

module.exports = {minRemoveToMakeValid}