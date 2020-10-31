const {threeSum} = require('./3sum');

test("example 1", () => {
  expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
});

test("example 2", () => {
  expect(threeSum([])).toEqual([]);
});

test("example 3", () => {
  expect(threeSum([0])).toEqual([]);
});

test("example 4", () => {
  expect(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])).toEqual([[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]);
})