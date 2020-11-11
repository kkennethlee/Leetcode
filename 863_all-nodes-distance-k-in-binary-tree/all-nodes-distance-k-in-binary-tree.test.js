const {distanceK} = require('./all-nodes-distance-k-in-binary-tree');

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
  let root = new BinaryTreeNode(3);
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
  let array = [3,5,1,6,2,0,8,null,null,7,4];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(distanceK(root, 5, 2)).toEqual([7, 4, 1]);
});

test("example 2", () => {
  let array = [3,5,1,6,2,0,8,null,null,7,4];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(distanceK(root, 1, 1)).toEqual([3, 0, 8]);
});

test("example 3", () => {
  let array = [3,5,1,6,2,0,8,null,null,7,4];
  createBinaryTreeFromArray(array);

  let root = array[0];
  expect(distanceK(root, 100, 3)).toEqual([]);
});
