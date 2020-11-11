/*
#110 https://leetcode.com/problems/balanced-binary-tree (verified)

Time: O(V + E) V: number of vertices, E: number of edges
Space: O(D) D: depth of tree
*/

//partial answer
function _isBalanced(root) {
  if(!root) return true;

  let depths = [];
  let maxDepth = -Infinity;

  const traverse = (node, depth) => {
    maxDepth = Math.max(depth, maxDepth);

    if(node.left) {
      traverse(node.left, depth + 1);
    } else
  
    if(node.right) {
      traverse(node.right, depth + 1);
    }
  }


  if(root.left) {
    traverse(root.left, 1);
  } else {
    maxDepth = 0;
  }

  depths[0] = maxDepth;

  maxDepth = -Infinity;

  if(root.right) {
    traverse(root.right, 1);
  } else {
    maxDepth = 0;
  }

  depths[1] = maxDepth;

  return (Math.abs(depths[0] - depths[1]) <= 1);

}

function isBalanced(root) {
  if(!root) return true;

  let balanced = true;

  const traverse = (node) => {

    if(!node) return 0;

    let left = traverse(node.left);
    let right = traverse(node.right);

    if(Math.abs(left - right) > 1) {
      balanced = false;
    }

    return Math.max(left, right) + 1;
  }

  traverse(root);

  return balanced;
}

module.exports = {isBalanced}