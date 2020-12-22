const {leastInterval} = require('./task-scheduler');

test("example 1", () => {
  expect(leastInterval(["A","A","A","B","B","B"], 2)).toEqual(8);
})

test("example 2", () => {
  expect(leastInterval(["A","A","A","B","B","B"], 0)).toEqual(6);
})

test("example 3", () => {
  expect(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)).toEqual(16);
})

test("example 4", () => {
  expect(leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], 2)).toEqual(12);
})

test("example 5", () => {
  expect(leastInterval(["A","A","A","A", "B","B","B","B", "C","C","C","C", "D","D","D", "E","E"], 2)).toEqual(17);
})

test("example 6", () => {
  expect(leastInterval(["A","A","A","B","B","B","C","D","E","F","G","H","I","J","K"], 7)).toEqual(18);
})