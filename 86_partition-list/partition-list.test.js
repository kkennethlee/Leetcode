const {partition} = require('./partition-list');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function matchLinkedListToArray(head, array) {
  if(head === null && !array.length) return true;
  if(head === null && array.length) return false;

  for(let i = 0; i < array.length; i++) {
    if(!head && i < array.length) return false;
    if(array[i] !== head.value ) return false;
    head = head.next;
  }

  if(head === null) {
    return true;
  }
  return false;
}

/*
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
*/
test("example 1", () => {
  let nodes = valuesToLinkedListNodes([1, 4, 3, 2, 5, 2]);
  let partitioned = partition(nodes[0], 3);
  let expected = matchLinkedListToArray(partitioned, [1,2,2,4,3,5]);
  expect(expected).toEqual(true);
});