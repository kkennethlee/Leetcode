const {trap} = require('./trapping-rain-water');

test("example 1", () => {
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
})

test("example 2", () => {
  expect(trap([4,2,0,3,2,5])).toEqual(9);
})