const {validPalindrome} = require('./valid-palindrome-ii');

test("example 1", () => {
  
  expect(validPalindrome("aba")).toEqual(true);
});

test("example 2", () => {
  
  expect(validPalindrome("abca")).toEqual(true);
});

test("example 3", () => {
  
  expect(validPalindrome("abc")).toEqual(false);
});
