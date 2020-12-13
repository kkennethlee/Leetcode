/*
#572 https://leetcode.com/problems/subtree-of-another-tree (verified)
Time: O(V + E) V: vertices of S tree, E: edge of S tree
Space: O(D) D: Depth of S tree
*/

function isSubtree(s, t) {
  
  //same tree algorithm from leetcode #100
  const isSameTree = (s, t) => {

    if(!s || !t) {
      return !s && !t;
    } else if(s.value !== t.value) {
      return false;
    } else {
      return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    }
  
  }

  if(!s) {
    return false;
  }

  if(isSameTree(s, t)) {
    return true;
  } else {
    return isSubtree(s.left, t) || isSubtree(s.right, t);
  }

}

module.exports = {isSubtree}