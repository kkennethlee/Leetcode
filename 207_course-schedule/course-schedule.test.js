const {canFinish} = require('./course-schedule');

test("example 1", () => {
  /**
    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0. So it is possible.
   */
  expect(canFinish(2, [[1, 0]])).toEqual(true);
});

test("example 2", () => {
  /**
    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0, and to take course 0 you should
      also have finished course 1. So it is impossible.
   */
  expect(canFinish(2, [[1, 0], [0, 1]])).toEqual(false);
});


test("example 3", () => {
  /**
    Input: numCourses = 3, prerequisites = [[1,0],[0,2]]
    Output: true
    Explanation: There are a total of 3 courses to take. 
      To take course 1 you should have finished course 0, and to take course 0 you should
      also have finished course 2.
   */
  expect(canFinish(3, [[1, 0], [0, 2]])).toEqual(true);
});


test("example 4", () => {
  expect(canFinish(3, [[1,0],[0,2],[2,1]])).toEqual(false);
});

test("example 5", () => {
  expect(canFinish(4, [[1,0],[0,3],[2,1]])).toEqual(true);
});

test("example 6", () => {
  expect(canFinish(3, [[0,1],[0,2],[1,2]])).toEqual(true);
});

test("example 7", () => {
  expect(canFinish(3, [[0,1],[0,2],[1,0]])).toEqual(false);
});

test("example 8", () => {
  expect(canFinish(8, [[1,0],[2,6],[1,7],[5,1],[6,4],[7,0],[0,5]])).toEqual(false);
});

test("example 9", () => {
  expect(canFinish(3, [[1, 0], [2, 0]])).toEqual(true);
});

test("example 10", () => {
  expect(canFinish(4, [[0, 1], [0, 2], [1, 3], [3, 0]])).toEqual(false);
});

test("example 11", () => {
  expect(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]])).toEqual(false);
});