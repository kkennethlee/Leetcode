const {getIntersectionNode} = require('./intersection-of-two-linked-lists');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

test("example 1", () => {
  let intersection = new LinkedListNode(8);
  intersection.next = new LinkedListNode(4);
  intersection.next.next = new LinkedListNode(5);

  let a1 = new LinkedListNode(4);
  a1.next = new LinkedListNode(1);
  a1.next.next = intersection;

  let b1 = new LinkedListNode(5);
  b1.next = new LinkedListNode(6);
  b1.next.next = new LinkedListNode(1);
  b1.next.next.next = intersection;

  expect(getIntersectionNode(a1, b1)).toEqual(intersection);
});


test("example 2", () => {
  let intersection = new LinkedListNode(2);
  intersection.next = new LinkedListNode(4);

  let a1 = new LinkedListNode(1);
  a1.next = new LinkedListNode(9);
  a1.next.next = new LinkedListNode(1);
  a1.next.next.next =  intersection;

  let b1 = new LinkedListNode(3);
  b1.next = intersection;

  expect(getIntersectionNode(a1, b1)).toEqual(intersection);
})

test("example 3", () => {
  let intersection = new LinkedListNode(1);

  let a1 = intersection
  let b1 = intersection

  expect(getIntersectionNode(a1, b1)).toEqual(intersection);
})

test("example 4", () => {
  let intersection = new LinkedListNode(3);

  let a1 = intersection;
  let b1 = new LinkedListNode(2);
  b1.next = intersection;

  expect(getIntersectionNode(a1, b1)).toEqual(intersection);
})