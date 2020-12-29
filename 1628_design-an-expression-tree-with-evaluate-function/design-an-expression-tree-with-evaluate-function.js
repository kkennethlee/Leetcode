/*
#1628 https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function (locked)
Time: O(V + E) V: number of vertices, E: number of edges
Space: O(D) D: depth of tree
*/

function evaluate(root) {
  //traverse left node, right node, then the root node

  const traverse = (node) => {

    let left = null;
    let right = null;

    if(node.left) {
      left = traverse(node.left);
    }

    if(node.right) {
      right = traverse(node.right);
    } 

    if(node.value === "+") {
      return left + right;
    } else if(node.value === '-') {
      return left - right;
    } else if(node.value === '*') {
      return left * right;
    } else if(node.value === '/') {
      return left / right;
    } else {
      return node.value;
    }

  }

  return traverse(root);

}

module.exports = {evaluate};