const {zigzagLevelOrder} = require('./binary-tree-zigzag-level-order-traversal');

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
  root.left = new BinaryTreeNode(9);
  root.right = new BinaryTreeNode(20);
  root.right.left = new BinaryTreeNode(15);
  root.right.right = new BinaryTreeNode(7);

  expect(zigzagLevelOrder(root)).toEqual([[5], [20, 9], [15, 7]]);
})

test("example 2", () => {
  const root = null;
  expect(zigzagLevelOrder(root)).toEqual([]);
})

test("example 3", () => {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.right.right = new BinaryTreeNode(5);

  expect(zigzagLevelOrder(root)).toEqual([[1], [3, 2], [4, 5]]);
})

//[0,2,4,1,null,3,-1,5,1,null,6,null,8]