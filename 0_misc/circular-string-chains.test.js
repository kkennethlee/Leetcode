const {isCycle} = require('./circular-string-chains');

// test("example 1", () => {
//   /**
//     Input: arr = ["geek", "king"]
//     Output: True
//   */
//   expect(isCycle(["geek", "king"])).toEqual(true);
// })

// test("example 2", () => {
//   /**
//     Input: arr = ["for", "geek", "rig", "kaf"]
//     Output: True
//    */
//   expect(isCycle(["for", "geek", "rig", "kaf"])).toEqual(true);
// })

test("example 3", () => {
  /**
    Input: arr = ["aab", "bac", "aaa", "cda"]
    Output: True
   */
  expect(isCycle(["aab", "bac", "aaa", "cda"])).toEqual(true);
})

test("example 4", () => {
  /**
    Input: arr = ["aaa", "bbb", "baa", "aab"]
    Output: True
   */
  expect(isCycle(["aaa", "bbb", "baa", "aab"])).toEqual(true);
})

test("example 5", () => {
  /**
    Input: arr = ["aaa"]
    Output: True
   */
  expect(isCycle(["aaa"])).toEqual(true);
})

test("example 6", () => {
  /**
    Input: arr = ["aaa", "bbb"]
    Output: False
   */
  expect(isCycle(["aaa", "bbb"])).toEqual(false);
})

test("example 7", () => {
  /**
    Input: arr = ["abc", "efg", "cde", "ghi", "ija"]
    Output: True
   */
  expect(isCycle(["abc", "efg", "cde", "ghi", "ija"])).toEqual(true);
})

test("example 8", () => {
  /**
    Input: arr = [“ijk”, “kji”, “abc”, “cba”]
    Output: False
   */
  expect(isCycle(["ijk", "kji", "abc", "cba"])).toEqual(false);
})