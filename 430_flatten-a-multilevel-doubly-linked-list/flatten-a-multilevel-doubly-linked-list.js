/*
#430 https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list (verified)
Time: O(N) N: number of nodes
Space: O(D) D: number of depth (descendants)
*/

function depthFirstIteration(head) {
  let prevToCurrent = head;
  let current = head;

  while (current) {
    if (current.child) {
      const childListTail = depthFirstIteration(current.child);

      // establish mutual connection between childListTail and current.next
      childListTail.next = current.next;
      if (current.next) {
        current.next.prev = childListTail;
      }

      // establish mutual connection between child and current
      current.next = current.child;
      if (current.child) {
        current.child.prev = current;
      }
      
      current.child = null;

    }
    prevToCurrent = current;
    current = current.next;
  }

  // return what would be tail
  return prevToCurrent;
}

function flatten(head) {
  if (!head) return head;
  
  depthFirstIteration(head);

  return head;
}

module.exports = {flatten}