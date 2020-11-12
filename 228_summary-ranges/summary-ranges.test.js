const {summaryRanges} = require('./summary-ranges');

/*
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
*/
test("example 1", () => {
  expect(summaryRanges([0,1,2,4,5,7])).toEqual(["0->2","4->5","7"]);
});

/*
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
*/
test("example 2", () => {
  expect(summaryRanges([0,2,3,4,6,8,9])).toEqual(["0","2->4","6","8->9"]);
});

/*
Input: nums = []
Output: []
*/
test("example 3", () => {
  expect(summaryRanges([])).toEqual([]);
});

/*
Input: nums = [-1]
Output: ["-1"]
*/
test("example 4", () => {
  expect(summaryRanges([-1])).toEqual(["-1"]);
});

/*
Input: nums = [0]
Output: ["0"]
*/
test("example 5", () => {
  expect(summaryRanges([0])).toEqual(["0"]);
});

test("example 6", () => {
  expect(summaryRanges([-2,-1,0,2,3,4,6,8,9])).toEqual(["-2->0","2->4","6","8->9"]);
});

test("example 7", () => {
  expect(summaryRanges([0,9])).toEqual(["0","9"]);
})

test("example 8", () => {
  expect(summaryRanges([-2147483648,-2147483647,2147483647])).toEqual(["-2147483648->-2147483647","2147483647"]);
})