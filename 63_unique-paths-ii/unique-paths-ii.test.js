const {uniquePathsWithObstacles} = require('./unique-paths-ii');

/*
  Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
  Output: 2
  Explanation: There is one obstacle in the middle of the 3x3 grid above.
  There are two ways to reach the bottom-right corner:
  1. Right -> Right -> Down -> Down
  2. Down -> Down -> Right -> Right
*/
test("example 1", () => {
  expect(uniquePathsWithObstacles(
    [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ])).toEqual(2);
})

/*
  Input: obstacleGrid = [[0,1],[0,0]]
  Output: 1
*/
test("example 2", () => {
  expect(uniquePathsWithObstacles(
    [
      [0,1],
      [0,0]
    ])).toEqual(1);
})

test("example 3", () => {
  expect(uniquePathsWithObstacles(
    [
      [1,0]
    ])).toEqual(0);
});

test("example 4", () => {
  expect(uniquePathsWithObstacles(
    [
      [1],
      [0]
    ])).toEqual(0);
});

test("example 5", () => {
  expect(uniquePathsWithObstacles(
    [
      [0,0],
      [1,1],
      [0,0]
    ])).toEqual(0);
})