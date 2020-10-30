const {findPythagoreanTriplets} = require('./pythagorean-triple');

test("example 1", () => {
  /**
    Input: nums = [3,1,4,6,5]
    Output: True
    There is a Pythagorean triplet (3, 4, 5).
   */
  expect(findPythagoreanTriplets([3,1,4,6,5])).toEqual(true);
})

test("example 2", () => {
  /**
    Input: nums = [10,4,6,12,5]
    Output: False
    There is no Pythagorean triplet.
   */
  expect(findPythagoreanTriplets([10,4,6,12,5])).toEqual(false);
})