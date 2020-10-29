/*
https://leetcode.com/problems/ransom-note/ (verified)

Time: O(R + M) R: length of RansomNote: M: length of Magazine
Space: O(26) We are supporting 26 alphabets

Assumption: only lower case letters exist
*/
function canConstruct(ransomNote, magazine) {
  let magazineTable = {}

  for(let i = 0; i < magazine.length; i++) {
    if(!magazineTable[magazine[i]]) {
      magazineTable[magazine[i]] = 0;
    }
    magazineTable[magazine[i]]++;
  }


  for(let i = 0; i < ransomNote.length; i++) {
    if(magazineTable[ransomNote[i]]) {
      magazineTable[ransomNote[i]]--;
      if(magazineTable[ransomNote[i]] === 0) {
        delete magazineTable[ransomNote[i]];
      }
    } else {
      return false;
    }
  }

  return true;
}

module.exports = {canConstruct};