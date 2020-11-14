const {invertTree} = require('./invert-binary-tree');

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

function createArrayFromBinaryTree(root) {
  let queue = [root];
  let array = [];
  while(queue.length) {

    const node = queue.shift();

    if(!node) {
      array.push(null);
    } else {
      array.push(node.value);
    }

    if(!node) {
      queue.push(null);
    } else {
      if(node.left) {
        queue.push(node.left);
      }

      if(node.right) {
        queue.push(node.right);
      }
    }

  }

  return array;
}

test("example 1", () => {
  /**
    Input:
          4
        /   \
       2     7
      / \   / \
     1   3 6   9

    Output:
          4
        /   \
       7     2
      / \   / \
     9   6 3   1
   */

  const root = new BinaryTreeNode(4);
  const left = root.insertLeft(2);
  left.insertLeft(1);
  left.insertRight(3);
  const right = root.insertRight(7);
  right.insertLeft(6);
  right.insertRight(9);

  let solution = invertTree(root);
  let array = createArrayFromBinaryTree(solution);

  expect(array).toEqual([4,7,2,9,6,3,1]);
})