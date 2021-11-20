const {wallsAndGates, wallsAndGatesDFS} = require('./walls-and-gates');

// INF === EMPTY ROOM
// -1  === WALL
// 0   === GATE


test("example 1 BFS", () => {
  
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

test("example 2 BFS", () => {
  
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

test("example 3 BFS", () => {
  expect(wallsAndGates([])).toEqual([]);
});

test("example 4 BFS", () => {
  expect(wallsAndGates([[]])).toEqual([[]]);
});


test("example 1 DFS", () => {
  
  expect(wallsAndGatesDFS(
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

test("example 2 DFS", () => {
  
  expect(wallsAndGatesDFS([
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

test("example 3 DFS", () => {
  expect(wallsAndGatesDFS([])).toEqual([]);
});

test("example 4 DFS", () => {
  expect(wallsAndGatesDFS([[]])).toEqual([[]]);
});