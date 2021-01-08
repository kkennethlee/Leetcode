const {isCousins} = require('./cousins-in-binary-tree');

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
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

        1
       / \
      2   3
     /
    4
*/
  
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(2);
  const right = root.insertRight(3);
  left.insertLeft(4);
  
  expect(isCousins(root, 4, 3)).toEqual(false);
})


test("example 2", () => {
  /**
  Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
  Output: true
  
          1
         / \
        2   3
         \   \
          4   5
  */
    
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(2);
  const right = root.insertRight(3);
  left.insertRight(4);
  right.insertRight(5);
  
  expect(isCousins(root, 5, 4)).toEqual(true);
})

test("example 3", () => {
  /**
  Input: root = [1,2,3,null,4], x = 2, y = 3
  Output: false
  
          1
         / \
        2   3
         \ 
          4  
  */
    
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(2);
  const right = root.insertRight(3);
  left.insertRight(4);
  
  expect(isCousins(root, 2, 3)).toEqual(false);
})