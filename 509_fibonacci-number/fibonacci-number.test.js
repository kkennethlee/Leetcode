const {fib} = require('./fibonacci-number');

/*
0 1 2 3 4 5 6

0 1 1 2 3 5 8
*/
test("example 1", () => {
  expect(fib(2)).toEqual(1);
});

test("example 2", () => {
  expect(fib(3)).toEqual(2);
});

test("example 3", () => {
  expect(fib(4)).toEqual(3);
});