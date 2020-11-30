const {findMaxConsecutiveOnes} = require('./max-consecutive-ones');

/*
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.
*/
test("example 1", () => {
  expect(findMaxConsecutiveOnes([1,1,0,1,1,1])).toEqual(3);
});