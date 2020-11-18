const {levelOrder} = require('./binary-tree-level-order-traversal');

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
    3
   / \
  9  20
    /  \
   15   7
*/

const root = new BinaryTreeNode(3);
const left = root.insertLeft(9);
const right = root.insertRight(20);
right.insertLeft(15);
right.insertRight(7);

  expect(levelOrder(root)).toEqual([
    [3],
    [9,20],
    [15,7]
  ]);
})

test("example 2", () => {
/**
        1
       /
      2
     /
    3
   /
  4
 /
5
*/
  
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(2);
  left.insertLeft(3);
  left.left.insertLeft(4);
  left.left.left.insertLeft(5);
  
    expect(levelOrder(root)).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5]
    ]);
  })