const {sortColors} = require('./sort-colors');

test("example 1", () => {
  expect(sortColors([2,0,2,1,1,0])).toEqual([0,0,1,1,2,2]);
});

test("example 2", () => {
  expect(sortColors([2,0,1])).toEqual([0,1,2]);
});

test("example 3", () => {
  expect(sortColors([0])).toEqual([0]);
});

test("example 4", () => {
  expect(sortColors([1])).toEqual([1]);
});

test("example 5", () => {
  let colors = "01202101201201201201201201021022201012010".split('');

  for(let i = 0; i < colors.length; i++) {
    colors[i] = parseInt(colors[i]);
  }

  let sorted = colors.sort((a, b) => a - b);

  expect(sortColors(colors)).toEqual(sorted);
});

test("example 6", () => {
  expect(sortColors([0,1,0])).toEqual([0,0,1]);
});