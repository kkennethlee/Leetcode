/*
#102 https://leetcode.com/problems/binary-tree-level-order-traversal
Time: O(V + E) V: vertices, E: edges (linear)
Space: O(Q) Q: size of queue
*/


function levelOrder(root) {

  //bfs
  const queue = [root];
  let count = 0;
  let level = 0;

  let output = [];

  while(queue.length) {

    const node = queue.shift();

    if(node)  {
      if(!output[level]) output[level] = []

      output[level].push(node.value);
    
      if(node.left) {
        queue.push(node.left);
      } else {
        queue.push(null);
      }
  
      if(node.right) {
        queue.push(node.right);
      } else {
        queue.push(null);
      }
    
    }

    count++;
    
    if(count === Math.pow(2, level + 1) - 1) {
      level++;
    }
  
  }

  return output;
}

module.exports = {levelOrder};