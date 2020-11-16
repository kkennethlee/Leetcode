const {letterCombinations} = require('./letter-combinations-of-a-phone-number');

test("example 1", () => {
  expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
});

test("example 2", () => {
  expect(letterCombinations("")).toEqual([]);
});

test("example 3", () => {
  expect(letterCombinations("2")).toEqual(["a","b","c"]);
});