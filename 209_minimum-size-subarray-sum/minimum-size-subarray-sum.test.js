const {minSubArrayLen} = require('./minimum-size-subarray-sum');

/*
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
*/
test("example 1", () => {
  expect(minSubArrayLen(7, [2,3,1,2,4,3])).toEqual(2);
});

test("example 2", () => {
  expect(minSubArrayLen(7, [2,3,1,7,2,4,3])).toEqual(1);
});

test("example 3", () => {
  expect(minSubArrayLen(11, [1,2,3,4,5])).toEqual(3);
});