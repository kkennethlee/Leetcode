const {orangesRotting} = require('./rotting-oranges');

test("example 1", () => {
  
  expect(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])).toEqual(4);
});

test("example 2", () => {
  
  expect(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])).toEqual(-1);
});

test("example 3", () => {
  
  expect(orangesRotting([[0,2]])).toEqual(0);
});

test("example 4", () => {
  
  expect(orangesRotting(
    [
    
      [2,1,1,0,0], 
      [1,1,1,0,0], 
      [0,1,1,1,1], 
      [0,1,0,0,1]
    
    ])).toEqual(7);
});

test("example 5", () => {
  
  expect(orangesRotting(
    [
    
      [1,1,0,0,0],
      [2,1,0,0,0],
      [0,0,0,1,2],
      [0,1,0,0,1]
    
    ])).toEqual(-1);
});

test("example 6", () => {
  
  expect(orangesRotting([[], []])).toEqual(0);
});