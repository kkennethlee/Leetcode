const {romanToInt} = require('./roman-to-integer');

test("example 1", () => {
  expect(romanToInt('III')).toEqual(3);
});

test("example 2", () => {
  expect(romanToInt('IV')).toEqual(4);
});

test("example 3", () => {
  expect(romanToInt('IX')).toEqual(9);
});

test("example 4", () => {
  expect(romanToInt('LVIII')).toEqual(58);
});

test("example 5", () => {
  expect(romanToInt('MCMXCIV')).toEqual(1994);
});