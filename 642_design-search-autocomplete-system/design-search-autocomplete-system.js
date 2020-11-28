/*
#642 https://leetcode.com/problems/design-search-autocomplete-system
*/

/*
Brute Force using filter function
Time: O(N * W) N: number of words, W: length of word
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

function autocomplete(words, word) {
  const trie = new Trie();

  //build trie
  for(const word of words) {
    trie.addWord(word);
  }

  console.log(trie);
}

module.exports = {autocomplete};