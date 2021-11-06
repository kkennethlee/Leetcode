/*
#92 https://leetcode.com/problems/reverse-linked-list-ii (verified)

Time: O(N) N: length of linkedlist
Space: O(1)
*/



function reverseList(head, start, end) {
  let newTail = head;
  let count = start;

  let prev = null;
  let current = head;

  while (count <= end) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  newTail.next = current;

  // prev: new head
  return prev;
}

function reverseBetween(head, left, right) {

  if(!head || !head.next || left === right) {
    return head;
  }

  let currentPosition = 1;

  let prevToReversedList = head;
  let pointer = head;
  while (currentPosition < left) {
    prevToReversedList = pointer;
    pointer = pointer.next;
    currentPosition++;
  }

  //pointer now matches with left
  const newSubHead = reverseList(pointer, left, right);
  
  if (left > 1) {
    prevToReversedList.next = newSubHead;
    return head;
  }
  return newSubHead;
}

module.exports = {reverseBetween}