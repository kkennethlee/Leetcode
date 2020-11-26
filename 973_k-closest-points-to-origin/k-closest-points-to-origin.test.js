const {kClosest} = require('./k-closest-points-to-origin');

test("example 1", () => {
  expect(kClosest([[1,3], [-2,2]], 1)).toEqual([[-2,2]]);
});
  
test("example 2", () => {
  expect(kClosest([[3,3],[5,-1],[-2,4]], 2)).toEqual([[3,3],[-2,4]]);
});