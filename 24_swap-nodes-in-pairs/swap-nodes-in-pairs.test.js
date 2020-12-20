const {swapPairs} = require('./swap-nodes-in-pairs');

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

test("example 1", () => {
  let nodes = valuesToLinkedListNodes([1,2,3,4]);
  let output = swapPairs(nodes[0]);
  expect(matchLinkedListToArray(output, [2,1,4,3])).toEqual(true);
})

test("example 2", () => {
  let nodes = valuesToLinkedListNodes([1,2,3,4,5]);
  let output = swapPairs(nodes[0]);
  expect(matchLinkedListToArray(output, [2,1,4,3,5])).toEqual(true);
})

test("example 3", () => {
  let nodes = valuesToLinkedListNodes([1,2,3,4,5,6]);
  let output = swapPairs(nodes[0]);
  expect(matchLinkedListToArray(output, [2,1,4,3,6,5])).toEqual(true);
})