const {uniquePaths} = require('./unique-paths');

test("example 1", () => {
  expect(uniquePaths(3, 7)).toEqual(28);
});

test("example 2", () => {
  expect(uniquePaths(3, 2)).toEqual(3);
});

test("example 3", () => {
  expect(uniquePaths(7, 3)).toEqual(28);
});

test("example 4", () => {
  expect(uniquePaths(3, 3)).toEqual(6);
});