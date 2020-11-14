const {intersection} = require('./intersection-of-two-arrays');

/*
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/
test("example 1", () => {
  let solution = intersection([1,2,2,1], [2,2]).sort((a, b) => b > a);
  let expected = [2];
  expect(solution).toEqual(expected);
});

/*
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
*/
test("example 2", () => {
  let solution = intersection([4,9,5], [9,4,9,8,4]).sort((a, b) => b > a);
  let expected = [9,4].sort((a, b) => b > a);
  expect(solution).toEqual(expected);
});