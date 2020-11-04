/*
#1171 https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
Time: O(N) N: length of LinkedList
Space: O(N) (callstack via recursion)
*/


//1 --> 2 --> -3 --> 3 --> 1

function removeZeroSumSublists(head) {
  let pointer = head;

  let sum = null;

  const traverseLinkedList = (node, prevNode) => {
    if(node.value < 0) {
      pointer = node;
      sum = node.value;
      return;
    } else {
      if(node.next) {
        traverseLinkedList(node.next, node);
      } else {
        pointer = node.next;
      }
    }
    sum += node.value;

    if(sum === 0) {
      if(prevNode) {
        prevNode.next = pointer.next;
        pointer = prevNode;
      } else {
        pointer = pointer.next;
        head = pointer;
      }
    }

  }


  while(pointer) {
    sum = null;
    traverseLinkedList(head, null);
  }

  return head;
}


module.exports = {removeZeroSumSublists};