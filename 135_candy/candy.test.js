const {candy} = require('./candy');

test("example 1", () => {
  /*
  Input: [1,0,2]
  Output: 5
  Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
  */
  expect(candy([1,0,2])).toEqual(5);
});

test("example 2", () => {
  /*
  Input: [1,2,2]
  Output: 4
  Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
    The third child gets 1 candy because it satisfies the above two conditions.
  */
  expect(candy([1,2,2])).toEqual(4);
});

test("example 3", () => {2
  expect(candy([1,2,3,4,3,1])).toEqual(13);
});

test("example 4", () => {2
  expect(candy([0,1,2,5,3,2,7])).toEqual(15);
});