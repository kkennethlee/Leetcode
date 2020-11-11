const {countUniversalSubtrees} = require('./count-univalue-subtrees');

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
  let array = [5, 1, 5, 5, 5, 5];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(countUniversalSubtrees(root)).toEqual(4);
});

test("example 2", () => {
  let array = [0, 1, 0, null, null, 1, 0, null, null, null, null, 1, 1];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(countUniversalSubtrees(root)).toEqual(5);
});

test("example 3", () => {
  let array = [5, 4, 5, 4, 4, null, 5];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(countUniversalSubtrees(root)).toEqual(5);
});