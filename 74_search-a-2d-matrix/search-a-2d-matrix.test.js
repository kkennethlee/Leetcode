const {searchMatrix} = require('./search-a-2d-matrix');

/*
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/
test("example 1", () => {
  expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toEqual(true);
});

test("example 2", () => {
  expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toEqual(false);
});

test("example 3", () => {
  expect(searchMatrix([[1,3,5,8],[10,11,15,16],[24,27,30,31]], 10)).toEqual(true);
});

test("example 4", () => {
  expect(searchMatrix([[1]], 10)).toEqual(false);
});

test("example 5", () => {
  expect(searchMatrix([[1]], 1)).toEqual(true);
});