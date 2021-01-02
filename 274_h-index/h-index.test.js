const {hIndex} = require('./h-index');

/*
Input: citations = [3,0,6,1,5]
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
            received 3, 0, 6, 1, 5 citations respectively. 
            Since the researcher has 3 papers with at least 3 citations each and the remaining 
            two with no more than 3 citations each, her h-index is 3.
*/
test("example 1", () => {
  expect(hIndex([3,0,6,1,5])).toEqual(3);
});

test("example 2", () => {
  expect(hIndex([100])).toEqual(1);
});

test("example 3", () => {
  expect(hIndex([0])).toEqual(0);
});

test("example 4", () => {
  expect(hIndex([])).toEqual(0);
});

test("example 5", () => {
  expect(hIndex([100, 103])).toEqual(2);
});

test("example 6", () => {
  expect(hIndex([0,0])).toEqual(0);
});