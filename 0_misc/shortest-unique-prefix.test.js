const {getUniquePrefixes} = require('./shortest-unique-prefix');

test("example 1", () => {
  expect(getUniquePrefixes(["zebra", "dog", "duck", "dove"])).toEqual(["z", "dog", "du", "dov"]);
})

test("example 2", () => {
  expect(getUniquePrefixes(["jon", "john", "jack", "team"])).toEqual(["jon", "joh", "ja", "t"]);
})

test("example 3", () => {
  expect(getUniquePrefixes(["bearcat", "bert"])).toEqual(["bea", "ber"]);
})