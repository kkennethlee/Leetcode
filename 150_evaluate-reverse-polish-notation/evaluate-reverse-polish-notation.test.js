const {evalRPN} = require('./evaluate-reverse-polish-notation');

/*
  Input: ["2", "1", "+", "3", "*"]
  Output: 9
  Explanation: ((2 + 1) * 3) = 9
*/
test("example 1", () => {
  expect(evalRPN(["2", "1", "+", "3", "*"])).toEqual(9);
})

/*
  Input: ["4", "13", "5", "/", "+"]
  Output: 6
  Explanation: (4 + (13 / 5)) = 6
*/
test("example 2", () => {
  expect(evalRPN(["4", "13", "5", "/", "+"])).toEqual(6);
})

/*
  Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
  Output: 22
  Explanation: 
    ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
  = ((10 * (6 / (12 * -11))) + 17) + 5
  = ((10 * (6 / -132)) + 17) + 5
  = ((10 * 0) + 17) + 5
  = (0 + 17) + 5
  = 17 + 5
  = 22
*/
test("example 3", () => {
  expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toEqual(22);
})