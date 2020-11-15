/*
#3 https://leetcode.com/problems/longest-substring-without-repeating-characters (verified)
Time: O(N) N: length of string
Space: O(N)
*/

function lengthOfLongestSubstring(s) {
  let start = 0;
  let max = 0;
  let hash = {};

  for(let i = 0; i < s.length; i++) {
    const ch = s[i];

    if(hash.hasOwnProperty(ch)) {
      const lastSeen = hash[ch];
      while(start < lastSeen + 1) {
        delete hash[s[start]];
        start++;
      }

      start = lastSeen + 1;
    }

    hash[ch] = i;
    max = Math.max(max, i - start + 1);
  }

  return max;
}

module.exports = {lengthOfLongestSubstring};