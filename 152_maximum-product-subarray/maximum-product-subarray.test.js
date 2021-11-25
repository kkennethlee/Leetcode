const {maxProduct} = require('./maximum-product-subarray');

test("example 1", () => {
  
  expect(maxProduct([2,3,-2,4])).toEqual(6);
});

test("example 2", () => {
  
  expect(maxProduct([-2,0,-1])).toEqual(0);
});

test("example 3", () => {
  
  expect(maxProduct([-2])).toEqual(-2);
});

test("example 4", () => {
  
  expect(maxProduct([-2, 3, -4])).toEqual(24);
});

test("example 5", () => {
  
  expect(maxProduct([2,-5,-2,-4,3])).toEqual(24);
});