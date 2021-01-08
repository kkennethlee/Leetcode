/*
#993 https://leetcode.com/problems/squares-of-a-sorted-array (verified)
Time: O(V + E) V: number of vertices, E: number of edges (linear)
Space: O(D) D: maximum depth of tree
*/

function isCousins(root, x, y) {
  let X = {depth: null, parent: null};
  let Y = {depth: null, parent: null};


  const dfs = (node, parent, depth) => {

    if(node.value === x) {
      X.parent = parent;
      X.depth = depth;
    }

    if(node.value === y) {
      Y.parent = parent;
      Y.depth = depth;
    }

    if(node.left) {
      dfs(node.left, node.value, depth + 1);
    }

    if(node.right) {
      dfs(node.right, node.value, depth + 1);
    }
  }

  dfs(root, null, 0);

  if(X.parent !== Y.parent && X.depth === Y.depth ) {
    return true;
  }

  return false;

}

module.exports = {isCousins};