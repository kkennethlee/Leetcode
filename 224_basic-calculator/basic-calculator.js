/*
#224 https://leetcode.com/problems/basic-calculator/

Time: O(N * P) N: length of string, P: number of pair of parenthesis
Space: O(P)
*/

function add(lhs, rhs) {
  lhs = parseInt(lhs);
  rhs = parseInt(rhs);
  return lhs + rhs;
}

function subtract(lhs, rhs) {
  lhs = parseInt(lhs);
  rhs = parseInt(rhs);
  return lhs - rhs;
}

function evaluate(lhs, rhs, op) {
  let summation = 0;
  if(op === '+') {
    summation += add(lhs, rhs);
  } else if(op === '-') {
    summation += subtract(lhs, rhs);
  }
  return summation;
}

function calculate(s) {
  
  const ops = {
    '+': true,
    '-': true,
    '(': true,
    ')': true,
  }



  let summation = 0;

  let lhs = ""; //
  let rhs = ""; //
  let op = ""; //
  let index = null;
  for(let i = 0; i < s.length; i++) {
    //skip blank space
    if(s[i] === " ") continue;

    if(Number.isInteger(index)) {
      i = index;
      index = null;
    }

    if(s[i]) {
      if(ops.hasOwnProperty(s[i])) {
        //is operator
        if(op.length === 0 && (s[i] === '+' || s[i] === '-')) {
          op += s[i];
        } else {
          //if we hit extra op, we calculate
  
          if(s[i] === '(') {
            //do recursive function
            let stack = 1;
            index = i + 1; //13
            while(stack > 0) { //0
              if(s[index] === "(") {
                stack++;
              } else if(s[index] === ")") {
                stack--;
              }
              index++;
            }
  
            //get a substring between the parenthesis and then do recursion
            if(op.length === 0) {
              lhs += calculate(s.slice(i + 1, index - 1));
            } else if(op.length === 1) {
              rhs += calculate(s.slice(i + 1, index - 1));
  
              
            }
          }
  
          if(!op.length) {
            i--;
            continue;
          }
  
          summation += evaluate(lhs, rhs, op);
  
          lhs = "" + summation;
          summation = 0;
          rhs = "";
          op = "",
          i--;
  
        }
      } else {
        //is not operator
        if(op.length === 0) {
          lhs += s[i];
        } else if(op.length === 1){
          rhs += s[i];
        }
      }
    }

    

  }

  //if we hit the end of the string, we calculate
  if(op.length) {
    summation += evaluate(lhs, rhs, op);
  } else {
    summation = parseInt(lhs);
  }

  return summation;
}

module.exports = {calculate};