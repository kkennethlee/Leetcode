/*
#104 https://leetcode.com/problems/maximum-depth-of-binary-tree (verified)

Time: O(2^N) N: number of node
Space: O(N) N: level of depth
*/

function maxDepth(root) {
  if(!root) return 0;

  let maxDepth = 0;
  const dfs = (node, depth) => {
    maxDepth = Math.max(maxDepth, depth);
    if(node.left) {
      dfs(node.left, depth + 1);
    }
    if(node.right) {
      dfs(node.right, depth + 1);
    }
  }

  dfs(root, 1);
  return maxDepth;
}

module.exports = {maxDepth};