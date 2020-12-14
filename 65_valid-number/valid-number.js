/*
#65 https://leetcode.com/problems/valid-number
Time: O(N) N: length of string
Space: O(N)
*/

function isNumber(s) {
  const digits = {
    '0': true,
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true,
  }

  const signs = {
    '.': true,
    '-': true,
    '+': true,
    'e': true,
    ' ': true,
  }

  const validateNumber = (number, decimalAllowed) => {
    let pointer = 0;
    let hasSign = false;
    let hasNumber = false;
    let hasDecimal = false;
    let hasIllegalSpace = false;


    while(pointer < number.length) {
      const ch = number[pointer];
      
      if(!digits.hasOwnProperty(ch) && !signs.hasOwnProperty(ch)) {
        return false;
      }

      //check for white space
      if((hasNumber || hasDecimal || hasSign) && ch === ' ') {
        hasIllegalSpace = true;
      }
      
      //check for signs
      if(!hasSign && (ch === '-' || ch === '+')) {
        hasSign = true;
      } else if(hasSign && (ch === '-' || ch === '+')) {
        return false;
      }

      //check for decimals
      if(decimalAllowed && !hasDecimal && ch === '.') {
        hasDecimal = true;
      } else if(decimalAllowed && hasDecimal && ch === '.') {
        return false;
      } else if(!decimalAllowed && ch === '.') {
        return false;
      }

      //check for number
      if(digits.hasOwnProperty(ch)) {
        //check for space
        if(hasIllegalSpace) return false;
        
        hasSign = true;
        hasNumber = true;
      }

      pointer++;
    }

    if(!hasNumber) {
      return false
    }
    return true;
  }

  let array = s.split('e');
  
  if(array.length > 2) {
    return false;
  }

  if(array.length === 2 && (array[0].length === 0 || array[1].length === 0)) {
    return false;
  }

  if(array.length === 1) {
    return validateNumber(array[0], true);
  } else if(array.length === 2) {
    return validateNumber(array[0], true) && validateNumber(array[1], false);
  }
}

module.exports = {isNumber}