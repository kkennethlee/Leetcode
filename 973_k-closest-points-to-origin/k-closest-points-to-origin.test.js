const {kClosest} = require('./k-closest-points-to-origin');

// test("example 1", () => {
//   expect(kClosest([[1,3], [-2,2]], 1)).toEqual([[-2,2]]);
// });
  
// test("example 2", () => {
//   expect(kClosest([[3,3],[5,-1],[-2,4]], 2)).toEqual([[3,3],[-2,4]]);
// });

// test("example 3", () => {
//   expect(kClosest([[3,3]], 1)).toEqual([[3,3]]);
// });

test("example 4", () => {
  expect(kClosest([[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]], 5)).toEqual([[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]);
})