const {calculate} = require('./basic-calculator');

test("example 1", () => {
  expect(calculate("1 + 1")).toEqual(2);
});

test("example 2", () => {
  expect(calculate("2-1 + 2")).toEqual(3);
});

test("example 3", () => {
  expect(calculate("200-1 + 2")).toEqual(201);
});

test("example 4", () => {
  expect(calculate("(1+(4+5+2)-3)+(6+8)")).toEqual(23);
});