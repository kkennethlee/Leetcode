/*
https://leetcode.com/problems/course-schedule/

(Partial) Brute Force
Time: O(N + N^2)
Space: O(N)
*/


function _canFinish(numCourses, prerequisites) {
  //must be different number in each pair (no duplicates)

  //if (numCourses === prerequisites.length) return false;
  if (!prerequisites.length) return true;

  let c = 0;
  let map = {};

  while(c < numCourses - 1) {
    let currentCourse = prerequisites[c][0];
    let preReqCourse = prerequisites[c][1];

    if(map[currentCourse] === undefined) {
      map[currentCourse] = preReqCourse;
    }

    c++;
  }

  for(let key in map) {
    c = 0;
    while(map.hasOwnProperty(key)) {
      c++;

      if(c === numCourses - 1) {
        return true;
      }
    }
  }

  return false;
}

/*
Solved using Graph adjacency list

Time: O(N + N^2) -> O(N^2)
Space: O(2N)     -> O(N)
*/
function createGraphAdjacencyList(prerequisites) {
  const graph = {};

  //Time: O(N): N: number of classes
  //Space: O(N)
  prerequisites.forEach((item, index) => {
    let first = item.shift();
    if(!graph[first]) {
      graph[first] = [];
    }
    graph[first] = graph[first].concat(item);
  });
  
  return graph;
}
//key: 0, value: 1
function isCycle(visited, value) {

  for(let i = 0; i < value.length; i++) {
    if(visited.hasOwnProperty(value[i])) {
      return true;
    }
  }
  return false;

}

function canFinish(numCourses, prerequisites) {
  if(!prerequisites.length || prerequisites.length < numCourses) return true;

  const graph = createGraphAdjacencyList(prerequisites);
  /*
    0: [1, 2],
    1: [2],
  */

  //Time: O(N^2)
  //Space: O(N)
  for(let key in graph) { //0
    const visited = {};
    let queue = [ ...graph[key] ]; //[2]
    visited[key] = true;  //{0: true, 1: true, 2: true}
    
    
    while(queue.length) {
      let first = queue.shift(); //2

      if(!visited[first]) {
        visited[first] = true;
      } else {
        return false;
      }

      if(!graph.hasOwnProperty(first)) {
        break;
      }

      if(!isCycle(visited, graph[first])) {
        queue = queue.concat(graph[first])
      } else {
        return false;
      }
    }

    if(numCourses === Object.keys(visited).length) {
      return true;
    }
  }

  return false;
}

module.exports = {canFinish};