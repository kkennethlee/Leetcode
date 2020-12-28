const {findFrequentTreeSum} = require('./most-frequent-subtree-sum');

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
  const root = new BinaryTreeNode(5);
  const left = root.insertLeft(2);
  const right = root.insertRight(-3);

  expect(findFrequentTreeSum(root)).toEqual([2, -3, 4]);
})

test("example 2", () => {
  const root = new BinaryTreeNode(5);
  const left = root.insertLeft(2);
  const right = root.insertRight(-5);

  expect(findFrequentTreeSum(root)).toEqual([2]);
})