/*
#49 https://leetcode.com/problems/count-univalue-subtrees

Time: O(N) N: number of nodes
Space: O(N)
*/

/*
Brute force
Time: O(N * NLog(N)  + N) -> O(N^2 * Log(N))
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