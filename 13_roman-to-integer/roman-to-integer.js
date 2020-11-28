/*
#13 https://leetcode.com/problems/roman-to-integer (verified)
Time: O(N) N: length of input
Space: O(1)
*/

function romanToInt(s) {

  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let integer = 0;

  let pointer = 0;

  while(pointer < s.length) {
    const current = s[pointer];
    const next = s[pointer+1];

    if(pointer === s.length - 1) {
      integer += romans[current];
      pointer++;
    } else {
      if(romans[current] >= romans[next]) {
        integer += romans[current];
        pointer++;
      } else {
        integer += romans[next] - romans[current];
        pointer = pointer + 2;
      }
    }
  }

  return integer;
}

module.exports = {romanToInt};