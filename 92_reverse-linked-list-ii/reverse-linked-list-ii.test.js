const {reverseBetween} = require('./reverse-linked-list-ii');

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

function compareLinkedLists(list1, list2) {

  while(list1 && list2) {
    if(list1.value !== list2.value) {
      return false;
    }
    list1 = list1.next;
    list2 = list2.next;
  }

  return true;
}

test("example 1", () => {
  /*
  1 ->    2 -> 3 -> 4   -> 5 -> null
  1 ->    4 -> 3 -> 2   -> 5 -> null
  */

  let nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
  let reversedNodes = valuesToLinkedListNodes([1, 4, 3, 2, 5]);

  let output = reverseBetween(nodes[0], 2, 4);
  const comparedLists = compareLinkedLists(output, reversedNodes[0]);

  expect(comparedLists).toEqual(true);
});

test("example 2", () => {
  let list = new LinkedListNode(3);
  list.next = new LinkedListNode(5);

  let reversedList = new LinkedListNode(5);
  reversedList.next = new LinkedListNode(3);

  let output = reverseBetween(list, 1, 2);
  const comparedLists = compareLinkedLists(output, reversedList);
  

  expect(comparedLists).toEqual(true);
});