/*
#438 https://leetcode.com/problems/find-all-anagrams-in-a-string (verified)
*/

/*
Brute force method using sort
Time: O(PLog(P) + S * PLog(P))
Space: O(P)
*/

function _findAnagrams(s, p) {

  p = p.split('').sort().join('');

  let start = 0;
  let end = p.length - 1;

  let substring = null;
  
  let output = [];

  while(end < s.length) {

    substring = s.substr(start, p.length).split('').sort().join('');

    if(substring === p) {
      output.push(start);
    }

    start++;
    end++;
  }

  return output;
}

/*
Iterative solution using hash
Time: O(N) N: length of string
Space: O(26)
*/
function findAnagrams(s, p) {
  
  const getAlphabetIndex = (char) => {
    const code = char.charCodeAt(0);
    if(code >= 97 && code <= 122) {
      return char.charCodeAt(0)-97;
    }
  }

  const hash = {};
  let indexes = new Array(26).fill(0);
  for(const char of p) {
    const code = getAlphabetIndex(char);
    indexes[code]++;
  }

  hash[indexes] = true;

  indexes = new Array(26).fill(0);

  const output = [];
  let start = 0;
  for(let end = 0; end < s.length; end++) {
    const endcode = getAlphabetIndex(s[end]);
    indexes[endcode]++;
    if(end >= p.length - 1) {
      if(hash.hasOwnProperty(indexes)) {
        output.push(start);
      }

      let startcode = getAlphabetIndex(s[start]);

      indexes[startcode]--;
      start++;
    }
  }

  return output;

}


module.exports = {findAnagrams};