/*
#150 https://leetcode.com/problems/evaluate-reverse-polish-notation (verified)
*/

/*
Brute force
Time: O(N^2); You visit N tokens in N tries N: length of token
Space: O(1)
*/
function _evalRPN(token) {

  let i = 0;
  while(token.length > 1) {

    if(token[i] === '+' || token[i] === '-' || token[i] === '*' || token[i] === '/') {
      let prev = i - 1;
      let pprev = i - 2;

      let number = null;
      if(token[i] === '+') {
        number = Number(token[pprev]) + Number(token[prev]);
      } else if(token[i] === '-') {
        number = Number(token[pprev]) - Number(token[prev]);
      } else if(token[i] === '*') {
        number = Number(token[pprev]) * Number(token[prev]);
      } else if(token[i] === '/') {
        number = Number(token[pprev]) / Number(token[prev]);

        if(number < 0) number = Math.ceil(number)
        else number = Math.floor(number);
      }

      number = String(number);
      token.splice(pprev, 3, number);
      i = 0;
    } else {
      i++;
    }
  }

  return Number(token[0]);
}


/*
Iterative method using stack
Time: O(N): N: length of token
Space: O(N)
*/
function evalRPN(token) {

  let stack = [];
  for(let i = 0; i < token.length; i++) {
    const t = token[i];

    if(t === '+' || t === '-' || t === '*' || t === '/') {
      const prev = stack.pop();
      const pprev = stack.pop();

      let number = null;
      if(t === '+') {
        number = Number(pprev) + Number(prev);
      } else if(t === '-') {
        number = Number(pprev) - Number(prev);
      } else if(t === '*') {
        number = Number(pprev) * Number(prev);
      } else if(t === '/') {
        number = Number(pprev) / Number(prev);

        if(number < 0) number = Math.ceil(number)
        else number = Math.floor(number);
      }

      stack.push(String(number));


    } else {

      stack.push(t);

    }

  }

  return Number(stack[0]);

}


module.exports = {evalRPN}