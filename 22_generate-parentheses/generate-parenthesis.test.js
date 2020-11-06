const {generateParenthesis} = require('./generate-parenthesis');

function checkForParenthesis(expected, generated) {
  for(const gen of generated) {
    if(expected.hasOwnProperty(gen)) {
      delete expected[gen];
    } else {
      return false;
    }
  }

  return (!Object.keys(expected).length);
}

test("n = 1", () => {
  /**
    Input: n = 1
    Output: ["()"]
   */

  let expected = {
    "()": true
  }

  let generated = generateParenthesis(1);
  expect(checkForParenthesis(expected, generated)).toEqual(true);
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

  let generated = generateParenthesis(2);
  expect(checkForParenthesis(expected, generated)).toEqual(true);
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

  let generated = generateParenthesis(3);
  expect(checkForParenthesis(expected, generated)).toEqual(true);
})