const {canJump} = require('./jump-game');

/*
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/
test("example 1", () => {
  expect(canJump([2,3,1,1,4])).toEqual(true);
});

/*
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/
test("example 2", () => {
  expect(canJump([3,2,1,0,4])).toEqual(false);
});

test("example 3", () => {
  expect(canJump([1,0,1,0])).toEqual(false);
});