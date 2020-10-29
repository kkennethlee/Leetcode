/*
https://leetcode.com/problems/find-all-anagrams-in-a-string
*/

//bruteforce
//Space: O(2P) -> O(S*P)
//Time: O(P + S*P) -> O(S*P)
function _findAnagrams(s, p) {

  const outputs = [];
  let pHash = {};
  for(let i = 0; i < p.length; i++) {

    if(!pHash[p[i]]) {
      pHash[p[i]] = 0;
    }
    pHash[p[i]]++;
  }


  for(let outer = 0; outer < s.length; outer++) {
    let sHash = {};

    for(let inner = 0; inner < p.length; inner++) {
      //sHash[inner]
      if(!sHash[s[inner + outer]]) {
        sHash[s[inner + outer]] = 0;
      }
      sHash[s[inner + outer]]++;
    }

    //compare the two hash tables if they are equal.
    let isEqual = true;
    for(let key in pHash) {
      if(pHash[key] !== sHash[key]) {
        isEqual = false;
        break;
      }
    }

    if(isEqual) {
      outputs.push(outer);
    }

  }

  return outputs;
}
/*
function findAnagrams(s, p) {
  let map = {},
    answer = [];
  // sliding window
  for (let i = 0; i < p.length; i++) {
    map[p[i]] = (map[p[i]] || 0) + 1;
  }

  // when charCount equals 0, count --
  let count = Object.keys(map).length;

  let left = 0,
    right = 0;
  while (right < s.length) {
    if (map[s[right]] !== undefined) {
      map[s[right]]--;
      if (map[s[right]] === 0) {
        count--;
      }
    }
    right++;
    while (count === 0) {
      if (map[s[left]] !== undefined) {
        map[s[left]]++;
        if (map[s[left]] > 0) {
          count++;
        }
      }
      if (right - left === p.length) {
        answer.push(left);
      }
      left++;
    }
  }
  return answer;
}
*/
//sliding window
function findAnagrams(s, p) {
  //"cbacebabacd", "abc"
  const outputs = [];
  let hash = {};

  //if p = "abc", create 2 object of {a: 1, b: 1, c: 1}
  for(let i = 0; i < p.length; i++) {
    if(!hash[p[i]]) {
      hash[p[i]] = 0;
    }
    hash[p[i]]++;
  }

  let leftPointer = 0;
  let rightPointer = 0;

  //diff is the difference between leftPointer and rightPointer;
  let diff = 0;

  while(rightPointer < s.length) {
    
    const char = s[rightPointer];

    if(hash[char] && hash[char] > 0) {
      hash[char]--;
      if(hash[char] === 0) {
        delete hash[char];
      }
    }
    

    //check the hash for the remaining key/value.
    //If none exist, then it's a full anagram
    let keyLength = Object.keys(hash).length;
    if(keyLength === 0) {
      rightPointer += diff;
      outputs.push(leftPointer);
    }



    //catch leftPointer up to the rightPointer
    //restore the hash
    while(leftPointer <= rightPointer) {//L: 0, R: 2
      if(pHash.hasOwnProperty(s[leftPointer])) {
        if(!hash[s[leftPointer]]) {
          hash[s[leftPointer]] = 0
        }
        hash[s[leftPointer]]++;
      }

      leftPointer++;
    }
    leftPointer--;
  }

  return outputs;
}

module.exports = {findAnagrams};