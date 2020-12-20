const {solveNQueens} = require('./n-queens');

test("example 1", () => {
  expect(solveNQueens(4)).toEqual([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]);
});

test("example 2", () => {
  expect(solveNQueens(1)).toEqual([["Q"]]);
});

test("example 3", () => {
  expect(solveNQueens(2)).toEqual([]);
});

test("example 4", () => {
  expect(solveNQueens(5)).toEqual([
  ["Q....", "..Q..", "....Q", ".Q...", "...Q."],
  ["Q....", "...Q.", ".Q...", "....Q", "..Q.."],
  [".Q...", "...Q.", "Q....", "..Q..", "....Q"],
  [".Q...", "....Q", "..Q..", "Q....", "...Q."],
  ["..Q..", "Q....", "...Q.", ".Q...", "....Q"],
  ["..Q..", "....Q", ".Q...", "...Q.", "Q...."],
  ["...Q.", "Q....", "..Q..", "....Q", ".Q..."],
  ["...Q.", ".Q...", "....Q", "..Q..", "Q...."],
  ["....Q", ".Q...", "...Q.", "Q....", "..Q.."],
  ["....Q", "..Q..", "Q....", "...Q.", ".Q..."]]);
});