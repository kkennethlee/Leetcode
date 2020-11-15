function _isCycle(graph, visited, firstChar, numberOfWords) {
  
  const words = graph[firstChar];

  for(const word of words) {
    if(visited[word]) continue;
    visited[word] = true;
    
    const lastChar = word[word.length-1];

    if(graph.hasOwnProperty(lastChar)) {
      if(_isCycle(graph, visited, lastChar, numberOfWords)) {
        return true;
      }
    }

    if(Object.keys(visited).length === numberOfWords) return true;
    return false;
  }

}

function isCycle(words) {

  const graph = {};
  const numberOfWords = words.length;

  //generate graph
  for(let i = 0; i < words.length; i++) {
    const firstChar = words[i][0];
    if(!graph.hasOwnProperty(firstChar)) {
      graph[firstChar] = [];
    }
    graph[firstChar].push(words[i]);
  }

  for(let firstChar in graph) {
    const visited = {}
    if(_isCycle(graph, visited, firstChar, numberOfWords)) {
      return true;
    } 
  }
  return false;
}

module.exports = {isCycle};