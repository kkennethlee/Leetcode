const {hasCycle} = require('./linked-list-cycle');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

test("example 1", () => {
  
  const head = new LinkedListNode(1);
  head.next = new LinkedListNode(2);
  head.next.next = new LinkedListNode(3);
  head.next.next.next = new LinkedListNode(4);

  head.next.next.next = head.next;

  expect(hasCycle(head)).toEqual(true);
});

test("example 2", () => {
  const head = new LinkedListNode(1);
  head.next = new LinkedListNode(2);
  head.next.next = head;
  expect(hasCycle(head)).toEqual(true);
});