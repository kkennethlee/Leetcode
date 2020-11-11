/*
#250 https://leetcode.com/problems/count-univalue-subtrees

Time: O(V + E) V: number of vertices, E: number of edges
Space: O(D) D: depth of tree
*/


function countUniversalSubtrees(root) {
  let count = 0;
  
  const traverse = (node) => {
    if((node.left === null && node.right === null) || 
      (node.left && node.right && node.left.value === node.right.value)) {
      count++;
    }
    

    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
  }

  traverse(root.left);
  traverse(root.right);

  return count;
}

module.exports = {countUniversalSubtrees};