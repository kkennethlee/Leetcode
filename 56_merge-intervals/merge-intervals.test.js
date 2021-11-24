const {merge} = require('./merge-intervals');

test("example 1", () => {
  expect(merge([
    [1,3],[2,6],[8,10],[15,18]
  ])).toEqual([[1,6],[8,10],[15,18]]);
});

test("example 2", () => {
  expect(merge([
    [1,4],[4,5]
  ])).toEqual([[1,5]]);
});

test("example 3", () => {
  expect(merge([
    [1,3]
  ])).toEqual([[1,3]]);
});

test("example 4", () => {
  expect(merge([
    [1,4],[5,6]
  ])).toEqual([[1,4],[5,6]]);
});

test("example 5", () => {
  expect(merge([
    [1,4],[0,5]
  ])).toEqual([[0,5]]);
});

test("example 6", () => {
  expect(merge([
    [1,4],[0,4]
  ])).toEqual([[0,4]]);
});

test("example 7", () => {
  expect(merge([
    [1,3],[5,8],[4,10],[20,25]
  ])).toEqual([[1,3],[4,10],[20,25]]);
});

test("example 8", () => {
  expect(merge([
    [1,4],[0,0]
  ])).toEqual([[0,0], [1,4]]);
});