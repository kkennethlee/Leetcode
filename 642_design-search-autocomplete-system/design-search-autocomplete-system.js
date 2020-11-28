/*
#642 https://leetcode.com/problems/design-search-autocomplete-system
*/

/*
Brute Force using filter function
Time: O(N * W) N: number of words, W: length of word
Space: O(1)
*/
function _autocomplete(words, word) {
  return words.filter(w => (w.substr(0, word.length) === word));
}

class Trie {
  constructor() {
    this.words = {};
  }

  addWord(word) {
    let currentObj = this.words;
    let preExistingWord = true;
    word += '*';

    for(const char of word) {
      //if char doesn't exist
      if(!currentObj[char]) {
        preExistingWord = false;
        if(currentObj[char] === '*') {
          currentObj[char] = true;
        } else {
          currentObj[char] = {};
        }
      }
      
      //set pointer to nested loop
      if(currentObj[char] !== '*') {
        currentObj = currentObj[char];
      }
    }
    return !preExistingWord;
  }
}

/*
Solution using Trie structure
Time: O(N * W) N: number of words, W: length of word
Space: O(N * W)
*/
function autocomplete(words, word) {
  const trie = new Trie();

  //build trie
  for(const word of words) {
    trie.addWord(word);
  }

  //get to root
  let root = trie.words;
  for(const char of word) {
    root = root[char];
  }

  const strs = [];
  let str = '';
  const dfs = (obj) => {
    for(let char in obj) {
      if(char === '*') {
        strs.push(`${word}${str}`);
        return;
      }
      str += char;
      dfs(obj[char]);
      str = str.substr(0, str.length - 1);
    }
  }

  dfs(root);
  return strs;
}

module.exports = {autocomplete};