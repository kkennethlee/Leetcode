/*
https://www.interviewbit.com/problems/shortest-unique-prefix (verified)
Time: O(N * M) N: number of words, M: length of unique prefix
Space: O(N * M)

*/

class Trie {
  constructor() {
    this.trie = {};
    this.freq = {};
  }

  //Time: O(N) N: length of word
  insert(word) {
    word += "*";
    let pointer = this.trie;
    let trail = '';

    for(let i = 0; i < word.length; i++) {
      const ch = word[i];
      trail += ch;

      if(!pointer[ch]) {
        pointer[ch] = {};
      }
      pointer = pointer[ch];


      if(!this.freq[trail]) {
        this.freq[trail] = 0;
      }
      this.freq[trail]++;
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

function getUniquePrefixes(words) {
  const trie = new Trie();

  //get words into trie
  for(const word of words) {
    trie.insert(word);
  }

  let pt = trie.trie;
  let trail = '';

  let uniquePrefixes = [];

  for(const word of words) {
    trail = '';
    pt = trie.trie;
    for(const ch of word) {
      trail += ch;

      pt = pt[ch];
      
      if(trie.freq[trail] === 1) {
        uniquePrefixes.push(trail);
        break;
      }
    }
  }

  return uniquePrefixes;
}

module.exports = {getUniquePrefixes}