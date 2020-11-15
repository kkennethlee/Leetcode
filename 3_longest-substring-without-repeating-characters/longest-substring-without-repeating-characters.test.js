const {lengthOfLongestSubstring} = require('./longest-substring-without-repeating-characters');

test("example 1", () => {
/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
  expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

test("example 2", () => {
/*
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/
  expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
});

test("example 3", () => {
/*
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});

test("example 4", () => {
/*
Input: s = ""
Output: 0
*/
  expect(lengthOfLongestSubstring("")).toEqual(0);
});

test("example 5", () => {
/*
Input: s = "abba"
Output: 2
*/
  expect(lengthOfLongestSubstring("abba")).toEqual(2);
});

test("example 6", () => {
/*
Input: s = "dvdf"
Output: 3
*/
  expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
});

test("example 7", () => {
/*
Input: s = "wobgrovw"
Output: 6
*/
  expect(lengthOfLongestSubstring("wobgrovw")).toEqual(6);
});