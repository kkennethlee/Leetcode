const {maxDepth} = require('./maximum-depth-of-binary-tree');

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

test("example 1", () => {
  /**
    Input: 3,9,20,null,null,15,7
    Output: 3
   */

  const root = new BinaryTreeNode(3);
  const left = root.insertLeft(9);
  left.insertLeft(null);
  left.insertRight(null);
  const right = root.insertRight(20);
  right.insertLeft(15);
  right.insertRight(7);

  expect(maxDepth(root)).toEqual(3);
})