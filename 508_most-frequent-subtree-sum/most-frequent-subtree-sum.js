/*
#1325 https://leetcode.com/problems/most-frequent-subtree-sum (verified)
Time: O(V + E) V: number of vertices, E: number of edges (linear)
Space: O(N + D) D: number of call stack, N: number of nodes
*/

function findFrequentTreeSum(root) {

  if(!root) return root;

  let freq = {}
  let array = [[]];

  const traverse = (node) => {
    let subtreeTotal = node.value;

    if(node.left) {
      subtreeTotal += traverse(node.left);
    }

    if(node.right) {
      subtreeTotal += traverse(node.right);
    }

    if(!freq[subtreeTotal]) {
      freq[subtreeTotal] = 0;
    }
    freq[subtreeTotal]++;

    if(!array[freq[subtreeTotal]]) {
      array[freq[subtreeTotal]] = [];
    }
    array[freq[subtreeTotal]].push(subtreeTotal);
    
    return subtreeTotal;
  }

  traverse(root);

  return array[array.length - 1];

}

module.exports = {findFrequentTreeSum};