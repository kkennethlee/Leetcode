function _isCycle(graph, visited, firstChar) {
  const word = graph[firstChar];
  visited[word] = true;
  const lastChar = word[word.length-1];

  if(graph.hasOwnProperty(lastChar) && !visited[graph[lastChar]]) {
    if( _isCycle(graph, visited, lastChar)){
      return true;
    }
    return false;
  } else if(graph.hasOwnProperty(lastChar) && visited[graph[lastChar]]) {
    if(Object.keys(visited).length === Object.keys(graph).length) {
      return true;
    }
    return false;
  }
}

function isCycle(words) {

  const graph = {};

  //generate graph
  for(let i = 0; i < words.length; i++) {
    const firstChar = words[i][0];
    graph[firstChar] = words[i];
  }

  for(let firstChar in graph) {
    const visited = {}
    if(_isCycle(graph, visited, firstChar)) {
      return true;
    } 
  }
  return false;
}

module.exports = {isCycle};