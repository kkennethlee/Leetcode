const {sortedSquares} = require('./squares-of-a-sorted-array');

test("example 1", () => {
  expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
});

test("example 2", () => {
  expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
});

test("example 3", () => {
  expect(sortedSquares([-7,-3])).toEqual([9,49]);
});

test("example 4", () => {
  expect(sortedSquares([2,3,11])).toEqual([4,9,121]);
});

test("example 5", () => {
  expect(sortedSquares([-1,2,2])).toEqual([1,4,4]);
});

