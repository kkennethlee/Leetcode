const {exist} = require('./word-search');

test("example 1", () => {
  expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toEqual(true);
});

test("example 2", () => {
  expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")).toEqual(true);
});

test("example 3", () => {
  expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")).toEqual(false);
});

test("example 4", () => {
  expect(exist([["C","A","A"],["A","A","A"],["B","C","D"]], "AAB")).toEqual(true);
});

test("example 5", () => {
  expect(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCEFSADEESE")).toEqual(true);
});
