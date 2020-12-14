const {isNumber} = require('./valid-number');

test("example 1", () => {
  expect(isNumber("0")).toEqual(true);
});

test("example 2", () => {
  expect(isNumber("0.1")).toEqual(true);
});

test("example 3", () => {
  expect(isNumber("abc")).toEqual(false);
});

test("example 4", () => {
  expect(isNumber("1 a")).toEqual(false);
});

test("example 5", () => {
  expect(isNumber("2e10")).toEqual(true);
});

test("example 6", () => {
  expect(isNumber("-90e3")).toEqual(true);
});

test("example 7", () => {
  expect(isNumber("1e")).toEqual(false);
});

test("example 8", () => {
  expect(isNumber("e3")).toEqual(false);
});

test("example 9", () => {
  expect(isNumber("6e-1")).toEqual(true);
});

test("example 10", () => {
  expect(isNumber("99e2.5")).toEqual(false);
});

test("example 11", () => {
  expect(isNumber("53.5e93")).toEqual(true);
});

test("example 11", () => {
  expect(isNumber("--6")).toEqual(false);
});

test("example 11", () => {
  expect(isNumber("-+3")).toEqual(false);
});

test("example 11", () => {
  expect(isNumber("95a54e53")).toEqual(false);
});

test("example 12", () => {
  expect(isNumber("1 ")).toEqual(true);
});

test("example 13", () => {
  expect(isNumber(" ")).toEqual(false);
});

test("example 14", () => {
  expect(isNumber(".1")).toEqual(true);
});