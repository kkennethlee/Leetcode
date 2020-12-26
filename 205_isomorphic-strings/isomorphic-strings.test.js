const {isIsomorphic} = require('./isomorphic-strings');

test("example 1", () => {
  expect(isIsomorphic("egg", "add")).toEqual(true);
})

test("example 2", () => {
  expect(isIsomorphic("foo", "bar")).toEqual(false);
})

test("example 3", () => {
  expect(isIsomorphic("paper", "title")).toEqual(true);
})

test("example 4", () => {
  expect(isIsomorphic("ab", "aa")).toEqual(false);
})

test("example 5", () => {
  expect(isIsomorphic("aa", "ab")).toEqual(false);
})