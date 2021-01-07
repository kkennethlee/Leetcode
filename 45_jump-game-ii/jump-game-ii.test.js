const {jump} = require('./jump-game-ii');

/*
Input: nums = [2,3,1,1,4]
Output: true
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/
test("example 1", () => {
  expect(jump([2,3,1,1,4])).toEqual(2);
});

/*
Input: nums = [2,3,0,1,4]
Output: 2
*/
test("example 2", () => {
  expect(jump([2,3,0,1,4])).toEqual(2);
});

test("example 3", () => {
  expect(jump([0,3,0,1,4])).toEqual(0);
});

test("example 4", () => {
  expect(jump([1,2])).toEqual(1);
});

test("example 5", () => {
  expect(jump([2,1])).toEqual(1);
});

test("example 6", () => {
  expect(jump([1])).toEqual(0);
});

test("example 7", () => {
  expect(jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3])).toEqual(2);
});

test("example 8", () => {
  expect(jump([1,1,1,1])).toEqual(3);
});