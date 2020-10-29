/*
https://leetcode.com/problems/validate-binary-search-tree

Space: O(N) N: number of node
Time: O(N)
*/

function depthFirstTraversal(root, currentIndex, lowerLimit = -Infinity, upperLimit = Infinity) {

  if(root[currentIndex] <= lowerLimit || root[currentIndex] >= upperLimit) {
    return false;
  }

  if(root[currentIndex] === null || root[currentIndex] === undefined) {
    return true;
  }

  let leftChildIndex = 2*currentIndex + 1;
  let rightChildIndex = 2*currentIndex + 2;

  let left = depthFirstTraversal(root, leftChildIndex, lowerLimit, root[currentIndex]);
  let right = depthFirstTraversal(root, rightChildIndex, root[currentIndex], upperLimit);

  return (left && right);

}

function isValidBST(root) {
  if(root.length === 0) return true;
  return depthFirstTraversal(root, 0);
}

module.exports = {isValidBST}