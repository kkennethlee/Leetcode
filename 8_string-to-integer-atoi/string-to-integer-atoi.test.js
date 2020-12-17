const {myAtoi} = require('./string-to-integer-atoi');

test("example 1", () => {
  expect(myAtoi("42")).toEqual(42);
});

test("example 2", () => {
  expect(myAtoi("   -42")).toEqual(-42);
});

test("example 3", () => {
  expect(myAtoi("4193 with words")).toEqual(4193);
});

test("example 4", () => {
  expect(myAtoi("words and 987")).toEqual(0);
});

test("example 5", () => {
  expect(myAtoi("-91283472332")).toEqual(-2147483648);
});

test("example 6", () => {
  expect(myAtoi("   --42")).toEqual(0);
});

test("example 7", () => {
  expect(myAtoi("3.14159")).toEqual(3);
});

test("example 8", () => {
  expect(myAtoi("10e10")).toEqual(10);
});

test("example 9", () => {
  expect(myAtoi("00000-42a1234")).toEqual(0);
});

test("example 10", () => {
  expect(myAtoi("11-42a1234")).toEqual(11);
});

test("example 11", () => {
  expect(myAtoi("+0 123")).toEqual(0);
});

test("example 12", () => {
  expect(myAtoi("2147483648")).toEqual(2147483647);
});

test("example 13", () => {
  expect(myAtoi("- 2147483648")).toEqual(0);
});

test("example 14", () => {
  expect(myAtoi("69- 2147483648")).toEqual(69);
});

test("example 15", () => {
  expect(myAtoi("6 9- 2147483648")).toEqual(6);
});

test("example 16", () => {
  expect(myAtoi("21474836++")).toEqual(21474836);
});