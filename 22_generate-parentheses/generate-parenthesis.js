/*
https://leetcode.com/problems/generate-parentheses/
*/

//Partial Answer
function generateParenthesis(n) {
  let output = [];
  let counter = 0;
  let parenthesis = "";
  

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

    if(parenthesis.length === n * 2) {
      //continue with more parenthesis;
      // output.push(parenthesis);
      // parenthesis = "";
      //continue;
    } else {

      const leftOver = n - i; //2 - 1 = 1
      for(let after = 0; after < leftOver; after++) {
        parenthesis += "(";
        counter++;
      }

      for(let close = 0; close < leftOver; close++) {
        parenthesis += ")";
        counter--;
      }

    }

    output.push(parenthesis);
    parenthesis = "";

    
  }

  return output;
}

module.exports = {generateParenthesis};