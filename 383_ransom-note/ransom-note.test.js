const {canConstruct} = require('./ransom-note');

test("example 1", () => {
  /**
    Input: ransomNote: "a" / magazine: "b"
    Output: false
   */
  expect(canConstruct("a", "b")).toEqual(false);
})

test("example 2", () => {
  /**
    Input: ransomNote: "aa" / magazine: "ab"
    Output: false
   */
  expect(canConstruct("aa", "ab")).toEqual(false);
})

test("example 3", () => {
  /**
    Input: ransomNote: "aa" / magazine: "aab"
    Output: true
   */
  expect(canConstruct("aa", "aab")).toEqual(true);
})