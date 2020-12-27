const {removeLeafNodes} = require('./delete-leaves-with-a-given-value');

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

//See #297 Serialize and Deserialize Binary Tree
function serialize(root) {
  let queue = [root];
  let array = [];

  if(!root) return array;

  let latestValue = 0;

  while(queue.length) {

    const node = queue.shift();

    if(!node) {
      array.push(null);
    } else {
      array.push(node.value);
      latestValue = array.length - 1;

      if(node.left) {
        queue.push(node.left);
      } else {
        queue.push(null);
      }

      if(node.right) {
        queue.push(node.right);
      } else {
        queue.push(null);
      }
    }

  }

  return array.splice(0, latestValue + 1); //detach trailing "nulls"
}

/*
  Input: root = [1,2,3,2,null,2,4], target = 2
  Output: [1,null,3,null,4]
  Explanation: Leaf nodes in green with value (target = 2) are removed.
  After removing, new nodes become leaf nodes with value (target = 2).
*/
test("example 1", () => {
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(2);
  const right = root.insertRight(3);
  left.insertLeft(2);
  right.insertLeft(2);
  right.insertRight(4);

  let array = serialize(removeLeafNodes(root, 2));

  expect(array).toEqual([1,null,3,null,4]);
})

test("example 2", () => {
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(3);
  const right = root.insertRight(3);
  left.insertLeft(3);
  left.insertRight(2);

  let array = serialize(removeLeafNodes(root, 3));

  expect(array).toEqual([1,3,null,null,2]);
})

test("example 3", () => {
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(2);
  left.insertLeft(2);
  left.left.insertLeft(2);
  left.left.left.insertLeft(2);

  let array = serialize(removeLeafNodes(root, 2));

  expect(array).toEqual([1]);
})

test("example 4", () => {
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(1);
  const right = root.insertRight(1);

  let array = serialize(removeLeafNodes(root, 1));

  expect(array).toEqual([]);
})

test("example 5", () => {
  const root = new BinaryTreeNode(1);
  const left = root.insertLeft(2);
  const right = root.insertRight(3);

  let array = serialize(removeLeafNodes(root, 1));

  expect(array).toEqual([1,2,3]);
})