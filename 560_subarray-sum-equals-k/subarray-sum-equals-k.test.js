const {subarraySum} = require('./subarray-sum-equals-k');

test("example 1", () => {
  expect(subarraySum([1,1,1],2)).toEqual(2);
});

test("example 2", () => {
  expect(subarraySum([1,2,3],3)).toEqual(2);
});

test("example 3", () => {
  expect(subarraySum([1,2,1,2,1],3)).toEqual(4);
});

test("example 4", () => {
  expect(subarraySum([1,-1,0],0)).toEqual(3);
});

test("example 6", () => {
  expect(subarraySum([100,1,2,3,4],3)).toEqual(2);
})

test("example 7", () => {
  expect(subarraySum([2,2,6],0)).toEqual(0);
})