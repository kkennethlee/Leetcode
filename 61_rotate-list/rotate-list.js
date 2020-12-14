/*
#65 https://leetcode.com/problems/rotate-list
Time: O(N) N: length of list
Space: O(1)
*/

function rotateRight(head, k) {
  if(k === 0) return head;
  if(!head) return head;

  let pointer = head;
  let listLength = 0;

  while(pointer) {
    listLength++;
    pointer = pointer.next;
  }

  if(listLength <= 1) return head;

  if(k >= listLength) {
    k = k % listLength;
    if(k === 0) return head;
  }

  pointer = head;
  for(let i = 0; i < k; i++) {
    pointer = pointer.next;
    listLength++;
  }
  
  let newEnd = head;

  while(pointer.next) {
    pointer = pointer.next;
    newEnd = newEnd.next;
  }

  let newHead = newEnd.next;
  newEnd.next = null;

  pointer.next = head;

  head = newHead;

  return head;
}

module.exports = {rotateRight}