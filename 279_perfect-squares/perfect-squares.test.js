const {numSquares} = require('./perfect-squares');

test("example 1", () => {
  expect(numSquares(12)).toEqual(3);
})

test("example 2", () => {
  expect(numSquares(13)).toEqual(2);
})