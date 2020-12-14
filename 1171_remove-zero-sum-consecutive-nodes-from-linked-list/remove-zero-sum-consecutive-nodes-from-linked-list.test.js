const {removeZeroSumSublists} = require('./remove-zero-sum-consecutive-nodes-from-linked-list');

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
  let nodes = valuesToLinkedListNodes([1,2,-3,3,1]);
  let removedNodes = removeZeroSumSublists(nodes[0]);
  let listAndArrayMatch = matchLinkedListToArray(removedNodes, [3,1]);

  expect(listAndArrayMatch).toEqual(true);
});

test("example 2", () => {
  let nodes = valuesToLinkedListNodes([1,2,3,-3,4]);
  let removedNodes = removeZeroSumSublists(nodes[0]);
  let listAndArrayMatch = matchLinkedListToArray(removedNodes, [1,2,4]);

  expect(listAndArrayMatch).toEqual(true);
});

test("example 3", () => {
  let nodes = valuesToLinkedListNodes([1,2,3,-3,-2]);
  let removedNodes = removeZeroSumSublists(nodes[0]);
  let listAndArrayMatch = matchLinkedListToArray(removedNodes, [1]);

  expect(listAndArrayMatch).toEqual(true);
});

test("example 4", () => {
  let nodes = valuesToLinkedListNodes([1,2,3,4,-10]);
  let removedNodes = removeZeroSumSublists(nodes[0]);
  let listAndArrayMatch = matchLinkedListToArray(removedNodes, []);

  expect(listAndArrayMatch).toEqual(true);
});
