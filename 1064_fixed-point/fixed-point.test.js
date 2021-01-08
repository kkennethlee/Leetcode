const {fixedPoint} = require('./fixed-point');

/*
  Input: [-10,-5,0,3,7]
  Output: 3
  Explanation: For the given array, A[0] = -10, A[1] = -5, A[2] = 0, A[3] = 3, thus the output is 3.
*/
test("example 1", () => {
  expect(fixedPoint([-10,-5,0,3,7])).toEqual(3);
});

/*
  Input: [0,2,5,8,17]
  Output: 0
  Explanation: A[0] = 0, thus the output is 0.
*/
test("example 2", () => {
  expect(fixedPoint([0,2,5,8,17])).toEqual(0);
});

/*
  Input: [-10,-5,3,4,7,9]
  Output: -1
  Explanation: There is no such i that A[i] = i, thus the output is -1.
*/
test("example 3", () => {
  expect(fixedPoint([-10,-5,3,4,7,9])).toEqual(-1);
});