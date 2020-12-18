const {largestNumber} = require('./largest-number');

test("example 1", () => {
  expect(largestNumber([10, 2])).toEqual("210");
})

test("example 2", () => {
  expect(largestNumber([3,30,34,5,9])).toEqual("9534330");
})

test("example 3", () => {
  expect(largestNumber([1])).toEqual("1");
})

test("example 4", () => {
  expect(largestNumber([10])).toEqual("10");
})

test("example 5", () => {
  expect(largestNumber([0, 0])).toEqual("0");
})

test("example 6", () => {
  expect(largestNumber([999999998,999999997,999999999])).toEqual("999999999999999998999999997");
})