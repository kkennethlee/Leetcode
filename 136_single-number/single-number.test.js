const {singleNumber} = require('./single-number');

test("example 1", () => {
  /**
    Input: nums = [2,2,1]
    Output: 1
   */
  expect(singleNumber([2,2,1])).toEqual(1);
});

test("example 2", () => {
  /**
    Input: nums = [4,1,2,1,2]
    Output: 4
   */
  expect(singleNumber([4,1,2,1,2])).toEqual(4);
});

test("example 2.1", () => {
  /**
    Input: nums = [4,1,2,1,2]
    Output: 4
   */
  expect(singleNumber([1,4,2,1,2])).toEqual(4);
});

test("example 3", () => {
  /**
    Input: nums = [1]
    Output: 1
   */
  expect(singleNumber([1])).toEqual(1);
});
