const {computeArea} = require('./rectangle-area');

test("example 1", () => {
  expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).toEqual(45);
});

test("example 2", () => {
  expect(computeArea(-2, -2, 2, 2, 3, 3, 4, 4)).toEqual(17);
});

test("example 3", () => {
  expect(computeArea(-2, -2, 2, 2, -4, 3, -3, 4)).toEqual(17);
});
