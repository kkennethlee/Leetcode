const {isBalanced} = require('./balanced-binary-tree');

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

function createBinaryTreeFromArray(array){
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

}


test("example 1", () => {
  let array = [3,9,20,null,null,15,7];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(isBalanced(root)).toEqual(true);
});

test("example 2", () => {
  let array = [1,2,2,3,3,null,null,4,4];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(isBalanced(root)).toEqual(false);
});

test("example 3", () => {
  let root = null;
  expect(isBalanced(root)).toEqual(true);
});

test("example 4", () => {
  let array = [1,2,2,3,null,null,3,4];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(isBalanced(root)).toEqual(false);
});