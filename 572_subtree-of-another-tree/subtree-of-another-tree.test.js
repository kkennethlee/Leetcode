const {isSubtree} = require('./subtree-of-another-tree');

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
Given tree s
     3
    / \
   4   5
  / \
 1   2

Given tree t
   4 
  / \
 1   2
*/

  const s = new BinaryTreeNode(3);
  const left = s.insertLeft(4);
  const right = s.insertRight(5);
  left.insertLeft(1);
  left.insertRight(2);

  const t = new BinaryTreeNode(4);
  t.insertLeft(1);
  t.insertRight(2);

  expect(isSubtree(s, t)).toEqual(true);
})

test("example 2", () => {
/**
Given tree s
     3
    / \
   4   5
  / \
 1   2
    /
   0

Given tree t
   4
  / \
 1   2
*/
  
  const s = new BinaryTreeNode(3);
  const left = s.insertLeft(4);
  const right = s.insertRight(5);
  left.insertLeft(1);
  left.insertRight(2);
  left.right.insertLeft(0);

  const t = new BinaryTreeNode(4);
  t.insertLeft(1);
  t.insertRight(2);
  
  expect(isSubtree(s, t)).toEqual(false);
})

test("example 3", () => {
/**
Given tree s
     3
    / \
   4   5
  / \
 1   2

Given tree t
     4
    / \
   1   2
  /
 1
*/

  const s = new BinaryTreeNode(3);
  const left = s.insertLeft(4);
  const right = s.insertRight(5);
  left.insertLeft(1);
  left.insertRight(2);

  const t = new BinaryTreeNode(4);
  t.insertLeft(1);
  t.insertRight(2);
  t.left.insertLeft(1);
  
  expect(isSubtree(s, t)).toEqual(false);
})

test("example 4", () => {
  const s = new BinaryTreeNode(1);
  const left = s.insertLeft(1);

  const t = new BinaryTreeNode(1);
  
  expect(isSubtree(s, t)).toEqual(true);
})

test("example 5", () => {
  const s = new BinaryTreeNode(1);
  const left = s.insertLeft(2);
  const right = s.insertRight(3);

  const t = new BinaryTreeNode(2);
  t.insertLeft(3);
  
  expect(isSubtree(s, t)).toEqual(false);
})

test("example 6", () => {
  const s = new BinaryTreeNode(1);
  const left = s.insertLeft(2);
  const right = s.insertRight(3);

  const t = new BinaryTreeNode(1);
  t.insertLeft(2);
  
  expect(isSubtree(s, t)).toEqual(false);
})
