/*
#680 https://leetcode.com/problems/valid-palindrome-ii (verified)
Time: O(s) s: length of string;
Space: O(1)
*/

function validatePalindrome(s, l, r) {
  while (l <= r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      return [l, r];
    }
  }

  return true;
}

function validPalindrome(s) {
  //check first if palindrome
  let start = 0;
  let end = s.length - 1;
  const result = validatePalindrome(s, start, end);

  if (result === true) {
    return true;
  } else {
    start = result[0];
    end = result[1];

    const skipLeftResult = validatePalindrome(s, start + 1, end);
    const skipRightResult = validatePalindrome(s, start, end - 1);

    if (skipLeftResult === true || skipRightResult === true) {
      return true;
    }

    return false;
  }

}

module.exports = {validPalindrome}