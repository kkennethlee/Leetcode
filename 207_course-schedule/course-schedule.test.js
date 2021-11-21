const {canFinish, isCycleBFS, isCycleDFS} = require('./course-schedule');

test("example 1 DFS", () => {
  /**
    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0. So it is possible.
   */
  expect(canFinish(2, [[1, 0]], isCycleDFS)).toEqual(true);
});

test("example 2 DFS", () => {
  /**
    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0, and to take course 0 you should
      also have finished course 1. So it is impossible.
   */
  expect(canFinish(2, [[1, 0], [0, 1]], isCycleDFS)).toEqual(false);
});


test("example 3 DFS", () => {
  /**
    Input: numCourses = 3, prerequisites = [[1,0],[0,2]]
    Output: true
    Explanation: There are a total of 3 courses to take. 
      To take course 1 you should have finished course 0, and to take course 0 you should
      also have finished course 2.
   */
  expect(canFinish(3, [[1, 0], [0, 2]], isCycleDFS)).toEqual(true);
});


test("example 4 DFS", () => {
  expect(canFinish(3, [[1,0],[0,2],[2,1]], isCycleDFS)).toEqual(false);
});

test("example 5 DFS", () => {
  expect(canFinish(4, [[1,0],[0,3],[2,1]], isCycleDFS)).toEqual(true);
});

test("example 6 DFS", () => {
  expect(canFinish(3, [[0,1],[0,2],[1,2]], isCycleDFS)).toEqual(true);
});

test("example 7 DFS", () => {
  expect(canFinish(3, [[0,1],[0,2],[1,0]], isCycleDFS)).toEqual(false);
});

test("example 8 DFS", () => {
  expect(canFinish(8, [[1,0],[2,6],[1,7],[5,1],[6,4],[7,0],[0,5]], isCycleDFS)).toEqual(false);
});

test("example 9 DFS", () => {
  expect(canFinish(3, [[1, 0], [2, 0]], isCycleDFS)).toEqual(true);
});

test("example 10 DFS", () => {
  expect(canFinish(4, [[0, 1], [0, 2], [1, 3], [3, 0]], isCycleDFS)).toEqual(false);
});

test("example 11 DFS", () => {
  expect(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]], isCycleDFS)).toEqual(false);
});

test("example 12 DFS", () => {
  expect(canFinish(8, [[1,0],[2,6],[1,7],[6,4],[7,0],[0,5]], isCycleDFS)).toEqual(true);
});


test("example 1 BFS", () => {
  /**
    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0. So it is possible.
   */
  expect(canFinish(2, [[1, 0]], isCycleBFS)).toEqual(true);
});

test("example 2 BFS", () => {
  /**
    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. 
      To take course 1 you should have finished course 0, and to take course 0 you should
      also have finished course 1. So it is impossible.
   */
  expect(canFinish(2, [[1, 0], [0, 1]], isCycleBFS)).toEqual(false);
});


test("example 3 BFS", () => {
  /**
    Input: numCourses = 3, prerequisites = [[1,0],[0,2]]
    Output: true
    Explanation: There are a total of 3 courses to take. 
      To take course 1 you should have finished course 0, and to take course 0 you should
      also have finished course 2.
   */
  expect(canFinish(3, [[1, 0], [0, 2]], isCycleBFS)).toEqual(true);
});


test("example 4 BFS", () => {
  expect(canFinish(3, [[1,0],[0,2],[2,1]], isCycleBFS)).toEqual(false);
});

test("example 5 BFS", () => {
  expect(canFinish(4, [[1,0],[0,3],[2,1]], isCycleBFS)).toEqual(true);
});

test("example 6 BFS", () => {
  expect(canFinish(3, [[0,1],[0,2],[1,2]], isCycleBFS)).toEqual(true);
});

test("example 7 BFS", () => {
  expect(canFinish(3, [[0,1],[0,2],[1,0]], isCycleBFS)).toEqual(false);
});

test("example 8 BFS", () => {
  expect(canFinish(8, [[1,0],[2,6],[1,7],[5,1],[6,4],[7,0],[0,5]], isCycleBFS)).toEqual(false);
});

test("example 9 BFS", () => {
  expect(canFinish(3, [[1, 0], [2, 0]], isCycleBFS)).toEqual(true);
});

test("example 10 BFS", () => {
  expect(canFinish(4, [[0, 1], [0, 2], [1, 3], [3, 0]], isCycleBFS)).toEqual(false);
});

test("example 11 BFS", () => {
  expect(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]], isCycleBFS)).toEqual(false);
});

test("example 12 BFS", () => {
  expect(canFinish(8, [[1,0],[2,6],[1,7],[6,4],[7,0],[0,5]], isCycleBFS)).toEqual(true);
});