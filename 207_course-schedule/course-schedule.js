/*
#207 https://leetcode.com/problems/course-schedule/ (verified)
*/

/*
Solved using Graph adjacency list, BFS and DFS

Time: O(N + N^3) -> O(N^3)
Space: O(2N)     -> O(N)
*/
function createGraphAdjacencyList(prerequisites) {
  const graph = {};

  //Time: O(N): N: number of classes
  //Space: O(N)
  prerequisites.forEach((item) => {
    let first = item.shift();
    if(!graph[first]) {
      graph[first] = [];
    }
    graph[first] = graph[first].concat(item);
  });
  
  return graph;
}

function isCycleDFS(graph, visited, startNode, currentNode = startNode) {

  const courses = graph[currentNode];
  visited[currentNode] = true;

  if (courses && courses.length) {
  
    for (const course of courses) {
      if (course === startNode) return true;

      if (!visited[course]) {

        if (isCycleDFS(graph, visited, startNode, course)) {
          return true;
        }

      }

      visited[course] = false;
      
    }

  }
  
  return false;
}

function isCycleBFS(graph, visited, startNode) {

  const queue = [...graph[startNode]];
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      if (currentNode === startNode) return true;

      const courses = graph[currentNode];
      visited[currentNode] = true;

      if (courses && courses.length) {

        for (const course of courses) {
          
          if (!visited[course]) {
            queue.push(course);
          } 
        }

      }

    }
  }

  return false;
}

function canFinish(numCourses, prerequisites, callback) {
  const graph = createGraphAdjacencyList(prerequisites);

  for(let key in graph) {
    const visited = [];
    key = parseInt(key);
    if(callback(graph, visited, key)){
      return false;
    }
  }

  return true;
}


module.exports = {canFinish, isCycleBFS, isCycleDFS};