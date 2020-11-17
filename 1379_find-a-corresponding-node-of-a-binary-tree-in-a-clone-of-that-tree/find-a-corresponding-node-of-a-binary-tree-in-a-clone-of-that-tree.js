/*
#1379 https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree (verified)
Time: O(V + E) V: vertices, E: edges (linear)
Space: O(D) D Depth of tree
*/

function getTargetCopy(original, cloned, target) {

  //let counterpart = null;

  const traverse = (original, cloned) => {
    let left = null;
    let right = null;

    if(original === target) {
      return cloned;
    }

    if(original.left) {
      left = traverse(original.left, cloned.left);
    }

    if(original.right) {
      right = traverse(original.right, cloned.right);
    }

    return left || right;
  }

  
  return traverse(original, cloned);

}

module.exports = {getTargetCopy}