const {findKthLargest} = require('./kth-largest-element-in-an-array');

test("example 1", () => {
  /**
    Input: [3,2,1,5,6,4] and k = 2
    Output: 5
   */
  expect(findKthLargest([3,2,1,5,6,4], 2)).toEqual(5);
})

test("example 2", () => {
  /**
    Input: [3,2,3,1,2,4,5,5,6] and k = 4
    Output: 4
   */
  expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toEqual(4);
})

test("example 3", () => {
  /**
    Input: [-1,-1] and k = 2
    Output: -1
   */
  expect(findKthLargest([-1,-1], 2)).toEqual(-1);
})