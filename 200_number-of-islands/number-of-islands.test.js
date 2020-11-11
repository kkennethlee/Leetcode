const {numIslands} = require('./number-of-islands');

test("example 1", () => {
  const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

  expect(numIslands(grid)).toEqual(1);
});

test("example 2", () => {
  const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

  expect(numIslands(grid)).toEqual(3);
});