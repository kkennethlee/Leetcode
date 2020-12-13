const {isSameTree} = require('./same-tree');

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
  Input:     1         1
            / \       / \
           2   3     2   3

          [1,2,3],   [1,2,3]

  */
  
  const p = new BinaryTreeNode(1);
  const left = p.insertLeft(2);
  const right = p.insertRight(3);

  const q = new BinaryTreeNode(1);
  q.insertLeft(2);
  q.insertRight(3);

  expect(isSameTree(p, q)).toEqual(true);
})

test("example 2", () => {
  /**
  Input:     1         1
            /           \
           2             2

          [1,2],     [1,null,2]

  */
  
  const p = new BinaryTreeNode(1);
  const left = p.insertLeft(2);

  const q = new BinaryTreeNode(1);
  q.insertRight(2);

  expect(isSameTree(p, q)).toEqual(false);
})

test("example 3", () => {
  /**
  Input:     1         1
            / \       / \
           2   1     1   2

          [1,2,3],   [1,2,3]

  */
  
  const p = new BinaryTreeNode(1);
  const left = p.insertLeft(2);
  const right = p.insertRight(1);

  const q = new BinaryTreeNode(1);
  q.insertLeft(1);
  q.insertRight(2);

  expect(isSameTree(p, q)).toEqual(false);
})