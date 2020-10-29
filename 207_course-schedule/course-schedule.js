/*
https://leetcode.com/problems/course-schedule/
*/

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

/*
{
  1: [0],
  0: [1],
}
*/

function hasCycle(graph, visited, node, courses) { //node: 1 courses: 1: -> node: 0 courses: 2 -> node: 1 course: 3
  if(!visited.hasOwnProperty(node)) {
    visited[node] = true; //{1: true, 0: true }
  } else {
    return true
  }

  let prereqs = graph[node]; //[1]
  if(prereqs) {
    for(let i = 0; i < prereqs.length; i++) {
      return hasCycle(graph, visited, prereqs[i], courses + 1);
    }
  }

  return false; 
}

function canFinish(numCourses, prerequisites) {
  const graph = createGraphAdjacencyList(prerequisites);

  for(let key in graph) {
    const visited = {};
    if(hasCycle(graph, visited, key, 1)){
      return false;
    }
  }

  return true;
}


module.exports = {canFinish};