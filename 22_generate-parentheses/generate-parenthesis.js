/*
#22 https://leetcode.com/problems/generate-parentheses/ (verified)
Time: O(2^n) (in reality, it will be less than 2^n because a lot of possibility will be eliminated early on)
Space: O(2*N) -> O(N)
*/

//Partial Answer
function _generateParenthesis(n) {
  let output = [];
  let counter = 0;
  let parenthesis = "";
  const pair = "()";
  let prevPair = "";

  //"("
  for(let i = 1; i <= n; i++) { //n = 3
    for(let before = 0; before < i; before++) {
      parenthesis += "(";
      counter++;
    }

    for(let close = 0; close < i; close++) {
      parenthesis += ")";
      counter--;
    }

    if(parenthesis.length !== n * 2) {
      const leftOver = n - i;
      for(let after = 0; after < leftOver; after++) {
        parenthesis += "(";
        counter++;
      }

      for(let close = 0; close < leftOver; close++) {
        parenthesis += ")";
        counter--;
      }
    }

    if(i < n) {
      prevPair += pair;
    }

    output.push(parenthesis);
    parenthesis = "";

  }

  if(n >= 3) {
    output.push( `(${prevPair})`  );
    output.push( `()${prevPair}` );
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