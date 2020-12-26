/*
#103 https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal (verified)
Time: O(N) N: number of nodes
Space: O(N)
*/

function zigzagLevelOrder(root) {
  if(!root) return [];
  let direction = 'rightToLeft';

  let queue = [root];
  let nextLevelQueue = [];

  let nodeValuesAtCurrentLevel = [];

  let output = [];
  while(queue.length) {

    let node = queue.pop();//3

    if(direction === 'rightToLeft') {

      if(node.right) {
        nextLevelQueue.push(node.right);
      }

      if(node.left) {
        nextLevelQueue.push(node.left);
      }

    } else if(direction === 'leftToRight') {

      if(node.left) {
        nextLevelQueue.push(node.left);
      }

      if(node.right) {
        nextLevelQueue.push(node.right);
      }

    }

    nodeValuesAtCurrentLevel.unshift(node.value);

    if(!queue.length) {
      queue = nextLevelQueue;
      nextLevelQueue = [];
      
      output.push(nodeValuesAtCurrentLevel);
      nodeValuesAtCurrentLevel = [];

      if(direction === 'leftToRight') {
        direction = 'rightToLeft';
      } else if(direction === 'rightToLeft') {
        direction = 'leftToRight';
      }
    }

  }

  return output;
}

module.exports = {zigzagLevelOrder}