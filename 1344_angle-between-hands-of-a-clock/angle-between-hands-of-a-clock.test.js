const {angleClock} = require('./angle-between-hands-of-a-clock');

/*
Input: hour = 12, minutes = 30
Output: 165
*/
test("example 1", () => {
  expect(angleClock(12, 30)).toEqual(165);
});

test("example 2", () => {
  expect(angleClock(3, 30)).toEqual(75);
});

test("example 3", () => {
  expect(angleClock(3, 15)).toEqual(7.5);
});

test("example 4", () => {
  expect(angleClock(4, 50)).toEqual(155);
});

test("example 5", () => {
  expect(angleClock(12, 0)).toEqual(0);
});