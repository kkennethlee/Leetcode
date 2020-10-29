const {isValidBST} = require('./validate-binary-search-tree');

test("example 1", () => {
  /**
       2
      / \
     1   3
    Input: [2,1,3]
    Output: true
   */
  expect(isValidBST([2,1,3])).toEqual(true);
})

test("example 2", () => {
  /**
        5
       / \
      1   4
         / \
        3   6

    Input: [5,1,4,null,null,3,6]
    Output: false
    Explanation: The root node's value is 5 but its right child's value is 4.
   */
  expect(isValidBST([5,1,4,null,null,3,6])).toEqual(false);
})