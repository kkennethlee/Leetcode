const {findAnagrams} = require('./find-all-anagrams-in-a-string');

test("anagram 1", () => {
  /**
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".
   */
  expect(findAnagrams("cbaebabacd", "cba")).toEqual([0, 6]);
});

test("anagram 2", () => {
  /**
    The substring with start index = 0 is "ab", which is an anagram of "ab".
    The substring with start index = 1 is "ba", which is an anagram of "ab".
    The substring with start index = 2 is "ab", which is an anagram of "ab".
   */
  expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
})

test("anagram 3", () => {
  expect(findAnagrams("bpaa", "aa")).toEqual([2]);
})