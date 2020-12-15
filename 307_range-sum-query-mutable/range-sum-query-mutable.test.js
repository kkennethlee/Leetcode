const {NumArray} = require('./range-sum-query-mutable');

test("example 1", () => {

  const numArray = new NumArray([1,3,5]);
  let sum = numArray.sumRange(0, 2);

  expect(sum).toEqual(9);

  numArray.update(1,2);

  sum = numArray.sumRange(0, 2)

  expect(sum).toEqual(8);
});

test("example 2", () => {
  
  const numArray = new NumArray([9,-8]);
  
  numArray.update(0, 3);

  let sum = numArray.sumRange(1, 1);
  expect(sum).toEqual(-8);

  sum = numArray.sumRange(0, 1);
  expect(sum).toEqual(-5);

  numArray.update(1,-3);

  sum = numArray.sumRange(0, 1)
  expect(sum).toEqual(0);
});
