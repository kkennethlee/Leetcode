const {removeNthFromEnd} = require('./remove-nth-node-from-end-of-list');

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

function isNodeRemoved(expected, listWithRemovedNode) {
  if(!listWithRemovedNode) return false;
  
  let index = 0;

  while(listWithRemovedNode && index < expected.length) {
    if(expected[index] !== listWithRemovedNode.value) {
      return false;
    }
    listWithRemovedNode = listWithRemovedNode.next;
    index++;
  }

  return true;
}

test("example 1", () => {
  let nodes = valuesToLinkedListNodes([1,2,3,4,5]);

  let expected = [1, 2, 3, 5];
  let n = 2;

  let listWithRemovedNode = removeNthFromEnd(nodes[0], n);

  expect(isNodeRemoved(expected, listWithRemovedNode)).toEqual(true);
});

test("example 2", () => {
  let nodes = valuesToLinkedListNodes([1]);

  let expected = [];
  let n = 1;

  let listWithRemovedNode = removeNthFromEnd(nodes[0], n);

  expect(isNodeRemoved(expected, listWithRemovedNode)).toEqual(true);
});

test("example 3", () => {
  let nodes = valuesToLinkedListNodes([1, 2]);

  let expected = [1];
  let n = 1;

  let listWithRemovedNode = removeNthFromEnd(nodes[0], n);

  expect(isNodeRemoved(expected, listWithRemovedNode)).toEqual(true);
});