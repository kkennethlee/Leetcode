const {maxProfit} = require('./best-time-to-buy-and-sell-stock');

test("example 1", () => {
  expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
});

test("example 2", () => {
  expect(maxProfit([7,6,4,3,1])).toEqual(0);
});