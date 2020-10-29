const {Solution} = require('./reverse-linked-list');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const S = new Solution;

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

function isListReversed(list, originalNodes) {
  let i = originalNodes.length - 1;
  while (list != null && i >= 0) {
    if (originalNodes[i] != list) {
      return false;
    }
    list = list.next;
    i--;
  }
  return list == null;
}

test("Use recursive solution", () => {
  /**
    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL
   */

  let nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
  let reversedList = S.reverseListRecursively(nodes[0]);

  expect(isListReversed(reversedList, nodes)).toEqual(true);
});

test("Use iterative solution", () => {
  /**
    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL
   */

  let nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
  let reversedList = S.reverseListIteratively(nodes[0]);

  expect(isListReversed(reversedList, nodes)).toEqual(true);
});