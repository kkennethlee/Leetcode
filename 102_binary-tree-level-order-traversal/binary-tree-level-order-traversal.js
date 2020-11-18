/*
#102 https://leetcode.com/problems/binary-tree-level-order-traversal (verified)
Time: O(V + E) V: vertices, E: edges (linear)
Space: O(2Q) -> O(Q) Q: size of queue
*/

function levelOrder(root) {

  //bfs
  const queue = [root];
  const levels = [0];

  let output = [];
  
  while(queue.length) {

    const node = queue.shift();
    const level = levels.shift();

    if(node)  {
      if(!output[level]) output[level] = []

      output[level].push(node.value);
    
      if(node.left) {
        queue.push(node.left);
      } else {
        queue.push(null);
      }
      levels.push(level+1);
  
      if(node.right) {
        queue.push(node.right);
      } else {
        queue.push(null);
      }
      levels.push(level+1);
    
    }
  
  }

  return output;
}

module.exports = {levelOrder};