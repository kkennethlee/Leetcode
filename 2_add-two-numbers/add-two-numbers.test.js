const {addTwoNumbers} = require('./add-two-numbers');

test("example 1", () => {
  /**
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
   */
  expect(addTwoNumbers([2,4,3], [5,6,4])).toEqual([7,0,8]);
})

test("example 2", () => {
  /**
    Input: l1 = [0], l2 = [0]
    Output: [0]
   */
  expect(addTwoNumbers([0], [0])).toEqual([0]);
})

test("example 3", () => {
  /**
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
   */
  expect(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])).toEqual([8,9,9,9,0,0,0,1]);
})