const {generateParenthesis} = require('./generate-parenthesis');

test("n = 1", () => {
  /**
    Input: n = 1
    Output: ["()"]
   */
  expect(generateParenthesis(1)).toEqual(["()"]);
});

test("n = 2", () => {
  /**
    Input: n = 2
    Output: ["(())", "()()"]
   */
  expect(generateParenthesis(2)).toEqual(["()()","(())"]);
})

test("n = 3", () => {
  /**
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
   */
  expect(generateParenthesis(3)).toEqual(["()(())", "(())()", "((()))","(()())","()()()"]);
})