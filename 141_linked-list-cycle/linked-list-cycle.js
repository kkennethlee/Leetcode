/*
#141 https://leetcode.com/problems/linked-list-cycle (verified)
Time: O(N) N: number of nodes
Space: O(1)
*/

function hasCycle(head) {
  if (!head) return false;
    
  // TODO: Write your code here
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;

}

module.exports = {hasCycle}