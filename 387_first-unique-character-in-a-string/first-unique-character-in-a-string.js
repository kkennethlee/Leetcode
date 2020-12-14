/*
#387 https://leetcode.com/problems/first-unique-character-in-a-string (verified)
Time: O(N) N: length of string
Space: O(26)
*/

function firstUniqChar(s) {
  if(s === "") return -1;

  //first iteration. collect frequence of char in a hash
  let hash = {};
  for(let i = 0; i < s.length; i++) {
    if(!hash.hasOwnProperty(s[i])) {
      hash[s[i]] = 0;
    }
    hash[s[i]] += 1;
  }

  //second iteration. find the first unique character
  for(let i = 0; i < s.length; i++) {
    const ch = s[i];
    if(hash[ch] === 1) {
      return i;
    }
  }

  return -1;
}

module.exports = {firstUniqChar}