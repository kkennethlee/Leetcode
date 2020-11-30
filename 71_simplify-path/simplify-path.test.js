const {simplifyPath} = require('./simplify-path');

/*
Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
*/
test("example 1", () => {
  expect(simplifyPath("/home/")).toEqual("/home");
});

/*
Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
*/
test("example 2", () => {
  expect(simplifyPath("/../")).toEqual("/");
});

/*
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
*/
test("example 3", () => {
  expect(simplifyPath("/home//foo/")).toEqual("/home/foo");
});

/*
Input: path = "/a/./b/../../c/"
Output: "/c"
*/
test("example 3", () => {
  expect(simplifyPath("/a/./b/../../c/")).toEqual("/c");
});