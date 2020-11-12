/*
#49 https://leetcode.com/problems/group-anagrams (verified)
*/

/*
Brute force
Time: O(N * MLog(M)) N: number of words in array, M: length of longest word
Space: O(N)
*/
function _groupAnagrams(strs) {
  const hash = {};

  for(let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('');
    const word = strs[i];

    if(!hash.hasOwnProperty(sorted)) {
      hash[sorted] = []
    }
    hash[sorted].push(word);
  }
  const values = Object.values(hash);
  return values;
}

/*
More efficient(?) method: get rid of sort function
Time: O(N*M)
Space: O(N)
*/
function groupAnagrams(strs) {
  const getCharIndex = (char) => char.charCodeAt(0) - 97;

  const getCharacterArrays = (word) => {
    const array = new Array(26).fill(0);

    for(let i = 0; i < word.length; i++) {
      const char = word[i];
      const index = getCharIndex(char);
      array[index]++;
    }

    return array;
  }

  const hash = {};

  for(let i = 0; i < strs.length; i++) {
    const word = strs[i].toLowerCase();
    const array = getCharacterArrays(word);

    if(!hash.hasOwnProperty(array)) {
      hash[array] = [];
    }

    hash[array].push(word);
  }

  const values = Object.values(hash);
  return values;
}

module.exports = {groupAnagrams};