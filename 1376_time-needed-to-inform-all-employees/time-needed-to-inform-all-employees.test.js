const {numOfMinutes} = require('./time-needed-to-inform-all-employees');

test("example 1", () => {
  expect(numOfMinutes(8, 4, [2,2,4,6,-1,4,4,5], [0,0,4,0,7,3,6,0])).toEqual(13);
});

test("example 2", () => {
  expect(numOfMinutes(1, 0, [-1], [0])).toEqual(0);
});

test("example 3", () => {
  expect(numOfMinutes(7, 6, [1,2,3,4,5,6,-1], [0,6,5,4,3,2,1])).toEqual(21);
});

test("example 4", () => {
  expect(numOfMinutes(15, 0,
    [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6],
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0])).toEqual(3);
});