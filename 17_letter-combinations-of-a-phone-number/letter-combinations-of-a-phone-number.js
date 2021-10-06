/*
#17 https://leetcode.com/problems/letter-combinations-of-a-phone-number (verified)
Time: O(3^N) N: number of digits. There is mostly 3 characters per digits
Space: O(N)
*/

function _findLetterCombinations(digits, output, letters, current = "", digitIndex = 0) {
  if (digitIndex === digits.length) {
    output.push(current);
    return;
  }

  const n = parseInt(digits[digitIndex]);
  const characterArray = letters[n];

  for (let i = 0; i < characterArray.length; i++) {
    current += characterArray[i];
    _findLetterCombinations(digits, output, letters, current, digitIndex + 1);
    //remove last char of current
    current = current.slice(0, -1);
  }

}

function letterCombinationsRecursive(digits) {
  if (!digits.length) return [];

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

  const output = [];
  _findLetterCombinations(digits, output, letters);
  return output;
}


function letterCombinations(digits) {
  if (!digits.length) return [];

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

  const output = [];
  const queue = [""];

  for (const ch of digits) {
    const int = parseInt(ch);
    const currentLetters = letters[int];
    const length = queue.length;

    for (let i = 0; i < length; i++) {

      const currentCombo = queue.shift();

      for (let j = 0; j < currentLetters.length; j++) {
        let newString = currentCombo + currentLetters[j];

        if (newString.length === digits.length) {
          output.push(newString);
        } else {
          queue.push(newString);
        }
        
      }
    }

  }
  
  return output;
}

module.exports = {letterCombinations};