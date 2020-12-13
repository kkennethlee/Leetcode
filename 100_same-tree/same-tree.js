/*
#100 https://leetcode.com/problems/same-tree (verified)
Time: O(V + E) V: vertices, E: Edges (linear) 
Space: O(D) D: depth of tree
*/

function isSameTree(p, q) {

  if(!p || !q) {
    return !p && !q;
  } else if(p.value !== q.value) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

}

module.exports = {isSameTree}