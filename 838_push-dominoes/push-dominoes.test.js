const {pushDominoes} = require('./push-dominoes');

test("example 1", () => {
  expect(pushDominoes(".L.R...LR..L..")).toEqual("LL.RR.LLRRLL..");
});

test("example 2", () => {
  expect(pushDominoes("RR.L")).toEqual("RR.L");
});

test("example 3", () => {
  expect(pushDominoes(".L.R.")).toEqual("LL.RR");
})