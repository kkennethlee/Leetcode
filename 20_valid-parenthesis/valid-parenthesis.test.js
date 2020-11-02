const {isValid} = require('./valid-parenthesis');

test("example 1", () => {
  /**
    Input: s = "()"
    Output: true
   */
  expect(isValid('()')).toEqual(true);
})

test("example 2", () => {
  /**
    Input: s = "()[]{}"
    Output: true
   */
  expect(isValid('()[]{}')).toEqual(true);
})

test("example 3", () => {
  /**
    Input: s = "(]"
    Output: false
   */
  expect(isValid('(]')).toEqual(false);
})

test("example 4", () => {
  /**
    Input: s = "([)]"
    Output: false
   */
  expect(isValid('([)]')).toEqual(false);
})

test("example 5", () => {
  /**
    Input: s = "{[]}"
    Output: true
   */
  expect(isValid('{[]}')).toEqual(true);
})

test("example 6", () => {
  /**
    Input: s = "(])"
    Output: false
   */
  expect(isValid('(])')).toEqual(false);
})