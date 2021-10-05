/*
#22 https://leetcode.com/problems/generate-parentheses/ (verified)
Time: O(2^n) (in reality, it will be less than 2^n because a lot of possibility will be eliminated early on)
Space: O(2*N) -> O(N)
*/

function generateParenthesisIterative(n) {
  const output = [];

  const queue = [{p: '', open: 0, close: 0}];

  while (queue.length) {
    const current = queue.shift();

    if (current.open === n && current.close === n) {
      output.push(current.p);
    } 

    // add open parenthesis
    if ( current.open < n ) {
      const copy = {...current};
      copy.open++; 
      copy.p += '(';

      queue.push(copy);
    }

    // add closing parenthesis
    if ( current.close < n && current.open > current.close) {
      const copy = {...current};
      copy.close++;
      copy.p += ')';

      queue.push(copy);
    }

  }

  return output;
}

function traverse(array, n, open, close, p) {

  if(p.length === n*2) {
    array.push(p);
    return;
  }

  if(open > 0) {
    traverse(array, n, open - 1, close, p += "(");
    p = p.substr(0, p.length - 1); //remove char added by function above after done with recursion
  }

  if(open !== close) {
    traverse(array, n, open, close - 1, p += ")");
    p = p.substr(0, p.length - 1); //remove char added by function above after done with recursion
  }
}

function generateParenthesis(n) {
  const array = [];
  traverse(array, n, n, n, "");
  return array;
}

module.exports = {generateParenthesis};