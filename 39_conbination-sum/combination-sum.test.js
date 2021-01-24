const {combinationSum} = require('./combination-sum');

/*
  Input: candidates = [2,3,6,7], target = 7
  Output: [[2,2,3],[7]]
  Explanation:
  2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
  7 is a candidate, and 7 = 7.
  These are the only two combinations.
*/
test("example 1", () => {
  expect(combinationSum([2,3,6,7], 7)).toEqual([[2,2,3],[7]]);
})

/*
  Input: candidates = [2,3,5], target = 8
  Output: [[2,2,2,2],[2,3,3],[3,5]]
*/
test("example 2", () => {
  expect(combinationSum([2,3,5], 8)).toEqual([[2,2,2,2],[2,3,3],[3,5]]);
})

/*
  Input: candidates = [2], target = 1
  Output: []
*/
test("example 3", () => {
  expect(combinationSum([2], 1)).toEqual([]);
})

/*
  Input: candidates = [1], target = 1
  Output: [[1]]
*/
test("example 4", () => {
  expect(combinationSum([1], 1)).toEqual([[1]]);
})

/*
  Input: candidates = [1], target = 2
  Output: [[1,1]]
*/
test("example 5", () => {
  expect(combinationSum([1], 2)).toEqual([[1,1]]);
})

test("example 6", () => {
  expect(combinationSum([2,7,6,3,5,1], 9)).toEqual([[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,2],[1,1,1,1,1,1,3],[1,1,1,1,1,2,2],[1,1,1,1,2,3],[1,1,1,1,5],[1,1,1,2,2,2],[1,1,1,3,3],[1,1,1,6],[1,1,2,2,3],[1,1,2,5],[1,1,7],[1,2,2,2,2],[1,2,3,3],[1,2,6],[1,3,5],[2,2,2,3],[2,2,5],[2,7],[3,3,3],[3,6]]);
})