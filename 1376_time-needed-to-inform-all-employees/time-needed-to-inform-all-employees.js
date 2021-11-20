/*
#1376 https://leetcode.com/problems/time-needed-to-inform-all-employees (verified)
Time: O(N)
Space: O(N)
*/

function createAdjacencyList(manager, informTime) {
  const adjacencyList = {};
  for (let i = 0; i < manager.length; i++) {
    if (!adjacencyList[manager[i]]) {
      adjacencyList[manager[i]] = [];
    }

    adjacencyList[manager[i]].push([i, informTime[i]]);
  }

  return adjacencyList;
}

function numOfMinutesBFS(n, headID, manager, informTime) {
  let maxMinutes = 0;
  const graph = createAdjacencyList(manager, informTime);

  const queue = [ [headID, informTime[headID]] ];

  while (queue.length) {
    const currentNode = queue.shift();
    const connections = graph[currentNode[0]];
    maxMinutes = Math.max(maxMinutes, currentNode[1]);
    if (connections && connections.length) {
      for (let i = 0; i < connections.length; i++) {
        queue.push([connections[i][0], connections[i][1] + currentNode[1]]);
      }
    }

  }
  return maxMinutes;
}

function dfs(graph, node, minutes) {

  if (!graph[node]) {
    return 0;
  }
  

  const connections = graph[node];
  let maxMinutes = 0;
  if (connections && connections.length) {
    for (const connection of connections) {
      const potentialMaxMinutes = dfs(graph, connection[0], connection[1]);
      maxMinutes = Math.max(maxMinutes, potentialMaxMinutes);
    }
  }

  return minutes + maxMinutes;
}

function numOfMinutes(n, headID, manager, informTime) {
  const graph = createAdjacencyList(manager, informTime);
  return dfs(graph, headID, informTime[headID]);
}

module.exports = {numOfMinutes}