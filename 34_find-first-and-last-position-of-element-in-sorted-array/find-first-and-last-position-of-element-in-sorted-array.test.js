const {searchRange} = require('./find-first-and-last-position-of-element-in-sorted-array');

test("example 1", () => {
  /**
    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]
   */
  expect(searchRange([5,7,7,8,8,10], 8)).toEqual([3, 4]);
})

test("example 2", () => {
  /**
    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]
   */
  expect(searchRange([5,7,7,8,8,10], 6)).toEqual([-1, -1]);
})

test("example 3", () => {
  /**
    Input: nums = [], target = 0
    Output: [-1,-1]
   */
  expect(searchRange([], 0)).toEqual([-1, -1]);
})

test("example 4", () => {
  expect(searchRange([0,1,2,3,4,4,4], 2)).toEqual([2, 2]);
})

test("example 5", () => {
  expect(searchRange([2, 2], 3)).toEqual([-1, -1]);
})

test("example 6", () => {
  expect(searchRange([0,0,1,1,1,4,5,5], 2)).toEqual([-1, -1]);
})

test("example 7", () => {
  expect(searchRange([1, 2, 3], 3)).toEqual([2, 2]);
})