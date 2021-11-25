const {maxArea} = require('./container-with-most-water');

test("example 1", () => {
  
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
});

test("example 2", () => {
  
  expect(maxArea([1,1])).toEqual(1);
});

test("example 3", () => {
  
  expect(maxArea([4,3,2,1,4])).toEqual(16);
});

test("example 4", () => {
  
  expect(maxArea([1,2,1])).toEqual(2);
});