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


    while(pointer < number.length) {
      const ch = number[pointer];
      
      if(!digits.hasOwnProperty(ch) && !signs.hasOwnProperty(ch)) {
        return false;
      }

      if(pointer === 0) {
        //check for first character
        if(digits.hasOwnProperty(ch) || ch === '-' || ch === '+') {
          hasSign = true;
          hasNumber = true;
        } else if(ch === '.' || ch === 'e') {
          return false;
        } else {
          //first character is digit
          hasSign = true;
        }
      } else {
        //check for multiple sign
        if(hasSign && (ch === '-' || ch === '+')) {
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