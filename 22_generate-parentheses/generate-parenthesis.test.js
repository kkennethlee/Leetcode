const {generateParenthesis} = require('./generate-parenthesis');

function checkForParenthesis(expected, generated) {

}

test("n = 1", () => {
  /**
    Input: n = 1
    Output: ["()"]
   */

  let expected = {
    "()": true
  }

  expect(generateParenthesis(1)).toEqual(["()"]);
});

test("n = 2", () => {
  /**
    Input: n = 2
    Output: ["(())", "()()"]
   */

  let expected = {
    "()()": true,
    "(())": true,
  }

  expect(generateParenthesis(2)).toEqual(["()()","(())"]);
})

test("n = 3", () => {
  /**
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
   */

  let expected = {
    "()(())": true, 
    "(())()": true, 
    "((()))": true,
    "(()())": true,
    "()()()": true
  }

  expect(generateParenthesis(3)).toEqual(["()(())", "(())()", "((()))","(()())","()()()"]);
})

test("n = 4", () => {
  /**
    Input: n = 4
    Output: ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
   */
  expect(generateParenthesis(4)).toEqual(["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]);
})