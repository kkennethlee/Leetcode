/*
#250 https://leetcode.com/problems/count-univalue-subtrees

Time: O(N) N: number of nodes
Space: O(N)
*/

//partial answer
function _countUniversalSubtrees(root) {
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

//bottoms up approach
function countUniversalSubtrees(root) {
  let count = 0;

  const traverse = (node) => {
    if(node.left === null && node.right === null) {
      count++;
      return node.value;
    }

    let left = null;
    let right = null;

    if(node.left) left = traverse(node.left);
    if(node.right) right = traverse(node.right);

    if( (left && !right && left === node.value) || 
        (!left && right && right === node.value) || 
        (left && right && left === node.value && right === node.value) ) {
      count++;
    }
    

  }

  if(root.left) traverse(root.left);
  if(root.right) traverse(root.right);

  return count;
}

module.exports = {countUniversalSubtrees};