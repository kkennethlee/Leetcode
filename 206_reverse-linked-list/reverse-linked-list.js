/*
https://leetcode.com/problems/reverse-linked-list/

Time: O(N) N: length of node 
Space: O(1)
*/

class Solution {

  //recursive solution
  reverseListRecursively(head, prevNode = null) {
    if(head === null) {
      return head;
    }
  
    this.reverseListRecursively(head.next, head);
    head.next = prevNode;
  }

  //iterative solution
  reverseListIteratively(head) {
    let currentPointer = head;
  
    //check for empty LinkedList
    if(!currentPointer) return null;

    let prevPointer = null;
    let nextPointer = head.next;

    while(nextPointer) {
      currentPointer.next = prevPointer;
      prevPointer = currentPointer;
      currentPointer = nextPointer;
      nextPointer = currentPointer.next;

      if(!nextPointer) {
        currentPointer.next = prevPointer;
      }
    }

    return currentPointer;
  }

}
  

module.exports = {Solution};

