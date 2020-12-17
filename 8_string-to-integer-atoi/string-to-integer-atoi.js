/*
#8 https://leetcode.com/problems/string-to-integer-atoi (verified)
Time: O(N) N: length of string
Space: O(1)
*/

function _myAtoi(s) {

  let hasInteger = false;
  let digitPlacement = 0;
  let hasSign = false;
  let hasSpace = false;
  let integer = 0;

  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] !== " ") {
      let n = parseInt(s[i]);

      //integers
      if( n >= 0 && n <= 9 ) {
        hasInteger = true;

        if(hasSign || hasSpace) {
          integer = 0;
          digitPlacement = 0;

          if(hasSign) hasSign = false;
          if(hasSpace) hasSpace = false;
        }

        integer += (10 ** digitPlacement) * n;
        digitPlacement++;

      } else if(s[i] === '-' || s[i] === '+') {
        if(hasSign) {
          integer = 0;
          digitPlacement = 0;
        }

        hasSign = true;
        if(s[i] === '-' && integer > 0) {
          integer *= -1;
        }

        if(hasSpace) {
          integer = 0;
          digitPlacement = 0;
          hasSpace = false;
        }

      } else if(s[i] === '.') {
        integer = 0;
        digitPlacement = 0;
      } else {
        //characters
        if(hasInteger) {
          integer = 0;
          digitPlacement = 0;
        }
      }
    } else {
      hasSpace = true;
    }
  }

  const INT_MIN = 2 ** 31 * -1;
  const INT_MAX = 2 ** 31;

  if(integer < INT_MIN) {
    return INT_MIN;
  } else if(integer >= INT_MAX) {
    return INT_MAX - 1;
  }

  return integer;
}

function myAtoi(s) {
  const integer = parseInt(s);

  const INT_MIN = 2 ** 31 * -1;
  const INT_MAX = 2 ** 31;

  if(integer < INT_MIN) {
    return INT_MIN;
  } else if(integer >= INT_MAX) {
    return INT_MAX - 1;
  }

  return parseInt(s) || 0;
}

module.exports = {myAtoi}