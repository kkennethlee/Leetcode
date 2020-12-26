/*
#205 https://leetcode.com/problems/isomorphic-strings (verified)

Time: O(N) N: length of s, t
Space: O(N)
*/

function isIsomorphic(s, t) {

  const s_t = {};
  const t_s = {};

  for(let i = 0; i < s.length; i++) {
    if(!s_t[s[i]]) {
      if(t_s[t[i]]) return false;
      
      s_t[s[i]] = t[i];
      t_s[t[i]] = s[i];

    } else {
      if(s_t[s[i]] !== t[i]) return false;
    }
  }

  return true;
}

module.exports = {isIsomorphic}