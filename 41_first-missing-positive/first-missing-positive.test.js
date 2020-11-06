const {firstMissingPositive} = require('./first-missing-positive');

test("example 1", () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3);
})

test("example 2", () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toEqual(2);
})

test("example 3", () => {
  expect(firstMissingPositive([3, 4, -1, 1, 2])).toEqual(5);
})

test("example 4", () => {
  expect(firstMissingPositive([-5, -4, -3, -2])).toEqual(1);
})

test("example 5", () => {
  expect(firstMissingPositive([2])).toEqual(1);
})

test("example 6", () => {
  expect(firstMissingPositive([-1,-2,-60,40,43])).toEqual(1);
})

test("example 7", () => {
  expect(firstMissingPositive([103,34,22,40,43])).toEqual(1);
})