const {maxSubArray} = require('./maximum-subarray');

/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
test("example 1", () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
});

/*
Input: nums = [1]
Output: 1
*/
test("example 2", () => {
  expect(maxSubArray([1])).toEqual(1);
});

/*
Input: nums = [0]
Output: 0
*/
test("example 3", () => {
  expect(maxSubArray([0])).toEqual(0);
});

/*
Input: nums = [-1]
Output: -1
*/
test("example 4", () => {
  expect(maxSubArray([-1])).toEqual(-1);
});

/*
Input: nums = [-2147483647]
Output: -2147483647
*/
test("example 5", () => {
  expect(maxSubArray([-2147483647])).toEqual(-2147483647);
});

test("example 6", () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
});

test("example 7", () => {
  expect(maxSubArray([-2,1])).toEqual(1);
});

test("example 8", () => {
  expect(maxSubArray([1,-2])).toEqual(1);
});