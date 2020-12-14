const {firstUniqChar} = require('./first-unique-character-in-a-string');

test("example 1", () => {
  expect(firstUniqChar("leetcode")).toEqual(0);
});

test("example 2", () => {
  expect(firstUniqChar("loveleetcode")).toEqual(2);
});