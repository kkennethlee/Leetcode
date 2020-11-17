const {getTargetCopy} = require('./find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree');

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

  const original = new BinaryTreeNode(7);
  original.insertLeft(4);
  let target = original.insertRight(3);
  target.insertLeft(6);
  target.insertRight(19);

  const cloned = new BinaryTreeNode(7);
  cloned.insertLeft(4);
  let expected = cloned.insertRight(3);
  expected.insertLeft(6);
  expected.insertRight(19);
  
  expect(getTargetCopy(original, cloned, target)).toEqual(expected);
});