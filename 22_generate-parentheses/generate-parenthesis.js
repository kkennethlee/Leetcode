/*
#22 https://leetcode.com/problems/generate-parentheses/
*/

//Partial Answer
function generateParenthesis(n) {
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

module.exports = {generateParenthesis};