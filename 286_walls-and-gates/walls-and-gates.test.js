const {wallsAndGates} = require('./walls-and-gates');

// INF === EMPTY ROOM
// -1  === WALL
// 0   === GATE


test("example 1", () => {
  
  expect(wallsAndGates(
    [
      [Infinity, -1, 0, Infinity],
      [Infinity, Infinity, Infinity, -1],
      [Infinity, -1, Infinity, -1],
      [0, -1, Infinity, Infinity]
    ]
  )).toEqual(
    [
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4]
    ]
  );
});

test("example 2", () => {
  
  expect(wallsAndGates([
    [Infinity, -1, 0, Infinity],
    [-1, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity]
  ])).toEqual(
    [
      [Infinity, -1, 0, 1],
      [-1, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4]
    ]
  );
});

test("example 3", () => {
  expect(wallsAndGates([])).toEqual([]);
});

test("example 4", () => {
  expect(wallsAndGates([[]])).toEqual([[]]);
});