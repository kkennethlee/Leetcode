const { myPow } = require('./powx-n');

test("example 1", () => {
  /*
  Input: x = 2.00000, n = 10
  Output: 1024.00000
  */
  expect(myPow(2.00000, 10)).toEqual(1024.00000);
});


test("example 2", () => {
  /*
  Input: x = 2.10000, n = 3
  Output: 9.26100
  */
  expect(myPow(2.10000, 3)).toEqual(9.26100);
});

test("example 3", () => {
  /*
  Input: x = 2.00000, n = -2
  Output: 0.25000
  Explanation: 2-2 = 1/22 = 1/4 = 0.25
  */
  expect(myPow(2.00000, -2)).toEqual(0.25);
});

test("example 4", () => {
  expect(myPow(-1.00000, 2147483647)).toEqual(0.25);
});