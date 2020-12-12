/*
#572 https://leetcode.com/problems/subtree-of-another-tree
Time: O(S + T). S: size of tree s, T: size of tree T
Space: O(S + T)
*/

function isSubtree(s, t) {
  let sStack = [s];
  let tStack = [t];
  let isEqual = false;

  const dfs = () => {
    while(sStack.length) {
      let sNode = sStack.pop();//1
      let tNode = tStack.pop();//1

      let hasChildren = false;
      
      if(sNode.value === tNode.value) {
        isEqual = true;
      } else if(sNode.value !== tNode.value ) {
        isEqual = false;
      }

      if(sNode.right) {
        sStack.push(sNode.right);
        hasChildren = true;
      }

      if(sNode.left) {
        sStack.push(sNode.left);
        hasChildren = true;
      }

      if(isEqual) {
        if(tNode.right) {
          tStack.push(tNode.right);
        }
  
        if(tNode.left) {
          tStack.push(tNode.left);
        }

        if(!tStack.length && !hasChildren) {
          return true;
        } else if(!tStack.length && hasChildren) {
          tStack = [t];
        }
      } else {
        tStack = [t];
      }

    }
    return false;
  }

  return dfs();
}

module.exports = {isSubtree}