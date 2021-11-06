const {flatten} = require('./flatten-a-multilevel-doubly-linked-list');

// doubly linkedlist
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.child = null;
  }
}

// TODO: WRITE A BETTER FUNCTION TO CREATE DOUBLY LINKEDLIST FROM ARRAY

test("example 1", () => {

  /*
  1---2---3---4---5---6--NULL
          |
          7---8---9---10--NULL
              |
              11--12--NULL
  */

  const head = new LinkedListNode(1);
  head.next = new LinkedListNode(2);
  head.next.next = new LinkedListNode(3);
  head.next.next.next = new LinkedListNode(4); 
  head.next.next.next.next = new LinkedListNode(5);
  head.next.next.next.next.next = new LinkedListNode(6);
  
  const child1 = new LinkedListNode(7);
  child1.next = new LinkedListNode(8);
  child1.next.next = new LinkedListNode(9);
  child1.next.next.next = new LinkedListNode(10); 
  
  const child2 = new LinkedListNode(11);
  child2.next = new LinkedListNode(12);
  
  head.next.next.child = child1;
  child1.next.child = child2;


  expect(flatten(head)).toEqual();
});


test("example 2", () => {

  /*
      1---NULL
      |
      2---NULL
      |
      11---NULL
  */

  const head = new LinkedListNode(1);
  const child1 = new LinkedListNode(2);
  const child2 = new LinkedListNode(3);
  
  head.child = child1;
  child1.child = child2;

  expect(flatten(head)).toEqual();
});
