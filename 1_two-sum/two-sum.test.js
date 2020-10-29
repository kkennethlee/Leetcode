const {twoSum} = require('./two-sum');

test("example 1", () => {
  /**
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
   */
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
})

test("example 2", () => {
  /**
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
   */
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
})

test("example 3", () => {
  /**
    Input: nums = [3,3], target = 6
    Output: [0,1]
   */
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
})