/*
#208 https://leetcode.com/problems/implement-trie-prefix-tree (verified)
Time: See below
Space: O(1)
*/

class Trie {
  constructor() {
    this.trie = {};
  }

  //Time: O(N) N: length of word
  insert(word) {
    word += "*";
    let pointer = this.trie;

    for(let i = 0; i < word.length; i++) {
      const ch = word[i];
      if(!pointer[ch]) {
        pointer[ch] = {};
      }
      pointer = pointer[ch];
    }
  }

  //Time: O(N) N: length of word
  search(word) {
    let pointer = this.trie;
    for(let i = 0; i < word.length; i++) {
      const ch = word[i];
      if(!pointer[ch]) return false;

      pointer = pointer[ch];
    }

    if(pointer["*"]) return true;

    return false;
  }

  //Time: O(N) N: length of prefix
  startsWith(prefix) {
    let pointer = this.trie;
    for(let i = 0; i < prefix.length; i++) {
      const ch = prefix[i];
      if(!pointer[ch]) return false;

      pointer = pointer[ch];
    }
    return true;
  }
}

module.exports = {Trie};