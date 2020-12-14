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

test("example 12", () => {
  expect(isNumber("--6")).toEqual(false);
});

test("example 13", () => {
  expect(isNumber("-+3")).toEqual(false);
});

test("example 14", () => {
  expect(isNumber("95a54e53")).toEqual(false);
});

test("example 15", () => {
  expect(isNumber("1 ")).toEqual(true);
});

test("example 16", () => {
  expect(isNumber(" ")).toEqual(false);
});

test("example 17", () => {
  expect(isNumber(".1")).toEqual(true);
});

test("example 18", () => {
  expect(isNumber(". 1")).toEqual(false);
});

test("example 19", () => {
  expect(isNumber(".1 1")).toEqual(false);
});

test("example 20", () => {
  expect(isNumber(" 1")).toEqual(true);
});

test("example 21", () => {
  expect(isNumber("- 1")).toEqual(false);
});

test("example 22", () => {
  expect(isNumber("1 .")).toEqual(false);
});

test("example 23", () => {
  expect(isNumber(".-4")).toEqual(false);
});

test("example 24", () => {
  expect(isNumber("-.4")).toEqual(true);
});

test("example 25", () => {
  expect(isNumber("96 e5")).toEqual(false);
});