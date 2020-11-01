const {checkPossibility} = require('./non-decreasing-array');

test("example 1", () => {
  expect(checkPossibility([4,2,3])).toEqual(true);
});

test("example 2", () => {
  expect(checkPossibility([4,2,1])).toEqual(false);
});

test("example 3", () => {
  expect(checkPossibility([1,1,1])).toEqual(true);
});

test("example 4", () => {
  expect(checkPossibility([2,3,3,2,2])).toEqual(false);
});

test("example 5", () => {
  expect(checkPossibility([-1,4,2,3])).toEqual(true);
});