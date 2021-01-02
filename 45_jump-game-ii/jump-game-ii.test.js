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