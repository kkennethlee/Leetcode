const {evaluate} = require('./design-an-expression-tree-with-evaluate-function');

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

/*
Input: s = ["3","4","+","2","*","7","/"]
Output: 2
Explanation: this expression evaluates to the above binary tree with expression ((3+4)*2)/7) = 14/7 = 2.
*/
test("example 1", () => {
  const root = new BinaryTreeNode('/');
  root.insertLeft("*");
  root.insertRight(7);
  root.left.insertLeft("+");
  root.left.insertRight(2);
  root.left.left.insertLeft(3);
  root.left.left.insertRight(4);

  expect(evaluate(root)).toEqual(2);
});

/*
Input: s = ["4","5","7","2","+","-","*"]
Output: -16
Explanation: this expression evaluates to the above binary tree with expression 4*(5-(2+7)) = 4*(-4) = -16.
*/
test("example 2", () => {
  const root = new BinaryTreeNode('*');
  root.insertLeft(4);
  root.insertRight('-');
  root.right.insertLeft(5);
  root.right.insertRight('+');
  root.right.right.insertLeft(2);
  root.right.right.insertRight(7);

  expect(evaluate(root)).toEqual(-16);
});

/*
Input: s = ["4","2","+","3","5","1","-","*","+"]
Output: 18
*/
test("example 3", () => {
  const root = new BinaryTreeNode('+');
  const left = root.insertLeft("+");
  const right = root.insertRight('*');
  left.insertLeft(4);
  left.insertRight(2);
  right.insertLeft(3);
  right.insertRight('-');
  right.right.insertLeft(5);
  right.right.insertRight(1);

  expect(evaluate(root)).toEqual(18);
});


/*
Input: s = ["100","200","+","2","/","5","*","7","+"]
Output: 757
*/
test("example 4", () => {
  const root = new BinaryTreeNode('+');
  root.insertLeft("*");
  root.insertRight(7);
  root.left.insertLeft("/");
  root.left.insertRight(5);
  root.left.left.insertLeft('+');
  root.left.left.insertRight(2);
  root.left.left.left.insertLeft(100);
  root.left.left.left.insertRight(200);


  expect(evaluate(root)).toEqual(757);
});
