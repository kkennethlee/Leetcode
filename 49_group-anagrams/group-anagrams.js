/*
#49 https://leetcode.com/problems/count-univalue-subtrees (verified)
*/

/*
Brute force
Time: O(N * MLog(M)) N: number of words in array, M: length of longest word
Space: O(N)
*/
function groupAnagrams(strs) {
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

module.exports = {groupAnagrams};