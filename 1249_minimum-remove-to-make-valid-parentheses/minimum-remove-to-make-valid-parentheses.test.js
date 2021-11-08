const {minRemoveToMakeValid} = require('./minimum-remove-to-make-valid-parentheses');

test("example 1", () => {
  const answers = {
    'lee(t(c)o)de': true,
    'lee(t(co)de)': true,
    'lee(t(c)ode)': true,
  };

  const answer = minRemoveToMakeValid('lee(t(c)o)de)');
  expect(answer in answers).toEqual(true);
});

test("example 2", () => {
  expect(minRemoveToMakeValid('a)b(c)d')).toEqual('ab(c)d');
});

test("example 3", () => {
  expect(minRemoveToMakeValid('))((')).toEqual('');
});

test("example 4", () => {
  expect(minRemoveToMakeValid('(a(b(c)d)')).toEqual('a(b(c)d)');
});