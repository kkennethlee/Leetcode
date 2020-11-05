const {mergeKLists} = require('./merge-k-sorted-lists');

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
  let listA = valuesToLinkedListNodes([1, 4, 5]);
  let listB = valuesToLinkedListNodes([1, 3, 4]);
  let listC = valuesToLinkedListNodes([2, 6]);

  let mergedList = mergeKLists([listA[0], listB[0], listC[0]]);
  let mergedListInArray = [1,1,2,3,4,4,5,6];

  let listAndArrayMatch = matchLinkedListToArray(mergedList, mergedListInArray);

  expect(listAndArrayMatch).toEqual(true);
});


test("example 2", () => {
  let listA = valuesToLinkedListNodes([1, 2, 3]);
  let listB = valuesToLinkedListNodes([4, 5, 6]);
  let listC = valuesToLinkedListNodes([7, 8]);

  let mergedList = mergeKLists([listA[0], listB[0], listC[0]]);
  let mergedListInArray = [1,2,3,4,5,6,7,8];
  
  let listAndArrayMatch = matchLinkedListToArray(mergedList, mergedListInArray);

  expect(listAndArrayMatch).toEqual(true);
});


test("example 3", () => {

  let mergedList = mergeKLists([]);
  let mergedListInArray = [];
  
  let listAndArrayMatch = matchLinkedListToArray(mergedList, mergedListInArray);

  expect(listAndArrayMatch).toEqual(true);
});


test("example 4", () => {
  let listA = valuesToLinkedListNodes([1, 4, 5]);
  let listB = valuesToLinkedListNodes([1, 3, 4]);
  let listC = valuesToLinkedListNodes([2, 6]);
  let listD = valuesToLinkedListNodes([8]);

  let mergedList = mergeKLists([listA[0], listB[0], listC[0], listD[0]]);
  let mergedListInArray = [1,1,2,3,4,4,5,6,8];

  let listAndArrayMatch = matchLinkedListToArray(mergedList, mergedListInArray);

  expect(listAndArrayMatch).toEqual(true);
});