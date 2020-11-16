/*
#17 https://leetcode.com/problems/letter-combinations-of-a-phone-number (verified)
Time: O(3^N) N: number of digits. There is mostly 3 characters per digits
Space: O(N)
*/

function letterCombinations(digits) {
  if(!digits.length) return [];

  const letters = [
    null,
    null,
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"],
    ["j","k","l"],
    ["m","n","o"],
    ["p","q","r","s"],
    ["t","u","v"],
    ["w","x","y","z"]
  ];

  const combinations = [];
  let word = "";

  const traverse = (letterIndex) => {

    if(word.length === digits.length) {
      combinations.push(word);
      return;
    }

    const int = parseInt(digits[letterIndex]);
    const chars = letters[int];
    for(let i = 0; i < chars.length; i++) {
      word += chars[i];
      traverse(letterIndex + 1);
      word = word.substr(0, word.length -1);
    }

  }

  traverse(0);

  return combinations;
}

module.exports = {letterCombinations};