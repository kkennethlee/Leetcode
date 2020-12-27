/*
#1325 https://leetcode.com/problems/delete-leaves-with-a-given-value (verified)
Time: O(V + E) V: number of vertices, E: number of edges (linear)
Space: O(D) D: number of depths
*/

function removeLeafNodes(root, target) {
  if(!root) return root;

  const traverse = (node) => {
    let hasTargetLeafNode = null;

    if(node.left) {

      hasTargetLeafNode = traverse(node.left);

      if(hasTargetLeafNode) node.left = null;

    }

    if(node.right) {

      hasTargetLeafNode = traverse(node.right);

      if(hasTargetLeafNode) node.right = null;

    }

    if(!node.left && !node.right && node.value === target) {
      return true;
    }
    return false;

  }

  if(traverse(root)) {
    return null;
  }
  return root;
  
}

module.exports = {removeLeafNodes};