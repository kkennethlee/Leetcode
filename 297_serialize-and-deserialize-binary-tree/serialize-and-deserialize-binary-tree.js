/*
#297 https://leetcode.com/problems/serialize-and-deserialize-binary-tree
Time: O(N) N: number of n
Space: O(N)
*/

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function serialize(root) {
  let queue = [root];
  let array = [];

  if(!root) return array;

  let latestValue = 0;

  while(queue.length) {

    const node = queue.shift();

    if(!node) {
      array.push(null);
    } else {
      array.push(node.value);
      latestValue = array.length - 1;

      if(node.left) {
        queue.push(node.left);
      } else {
        queue.push(null);
      }

      if(node.right) {
        queue.push(node.right);
      } else {
        queue.push(null);
      }
    }

  }

  return array.splice(0, latestValue + 1);
}

function deserialize(array) {
  if(!array.length) return null;

  let root = new BinaryTreeNode(array[0]);
  array[0] = root;

  for(let i = 0; i < array.length; i++) {
    let currentNode = array[i];

    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;

    if( Number.isInteger(array[leftIndex]) ) {
      array[leftIndex] = currentNode.insertLeft( array[leftIndex] );
    }

    if( Number.isInteger(array[rightIndex]) ) {
      array[rightIndex] = currentNode.insertRight( array[rightIndex] );
    }
  }

  return root;
}


module.exports = {serialize, deserialize};