/*
#226 https://leetcode.com/problems/invert-binary-tree (verified)
Time: O(V + E) V: number of vertices, E: number of edges
Space: O(D) D: depth of tree
*/

function invertTree(root) {
  if(!root) return root;


  const traverse = (node) => {
    
    if(node.left) {
      traverse(node.left);
    }

    if(node.right) {
      traverse(node.right);
    }


    //swap
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

  }

  traverse(root);

  return root;
}

module.exports = {invertTree};