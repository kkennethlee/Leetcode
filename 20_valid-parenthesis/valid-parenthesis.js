/*
#20 https://leetcode.com/problems/valid-parentheses (verified)
Time: O(N) N: length of 'bracket'
Space: O(N)
*/

function isValid(code) {
  if(code.length === '') {
    return true;
  }
  let stack = '';
  const matches = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for(let i = 0; i < code.length; i++) {
    if(!matches.hasOwnProperty(code[i])) {
      //opener
      stack += code[i];
    } else {
      //closer
      if(stack.length === 0) {
        return false;
      }

      let topOfStack = stack[stack.length - 1];
      if(topOfStack === matches[code[i]]) {
        //remove last char from stack.
        stack = stack.substr(0, stack.length - 1);
      } else {
        return false;
      }
    }
  }

  return stack.length ? false : true;
}


module.exports = {isValid}