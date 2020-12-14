const {deleteDuplicates} = require('./remove-duplicates-from-sorted-list');

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

test("example 1", () => {
  let nodes = valuesToLinkedListNodes([1,1,2]);
  let removedNodes = deleteDuplicates(nodes[0]);
  let listAndArrayMatch = matchLinkedListToArray(removedNodes, [1,2]);

  expect(listAndArrayMatch).toEqual(true);
});

test("example 2", () => {
  let nodes = valuesToLinkedListNodes([1,1,2,3,3]);
  let removedNodes = deleteDuplicates(nodes[0]);
  let listAndArrayMatch = matchLinkedListToArray(removedNodes, [1,2,3]);

  expect(listAndArrayMatch).toEqual(true);
});