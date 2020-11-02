/*
#19 https://leetcode.com/problems/remove-nth-node-from-end-of-list
*/

/*
Brute Force
Time: O(2N) -> O(N) N: length of LinkedList
Space: O(N)
*/
function _removeNthFromEnd(head, n) {
  let length = 0;
  let current = head;

  //iterate through linkedlist to get the length;
  while(current) {
    length++;
    current = current.next;
  }

  let k = length - n + 1;

  if(k >= length) return head;


  let prev = head;
  current = prev.next;

  let currentPointer = 2;

  //iterate again to get the nth node from end of list
  while(currentPointer < k) {
    prev = prev.next;
    current = current.next;
    currentPointer++;
  }

  prev.next = current.next;

  return head;
}

/*
Iterate through recursion
Time: O(N) -> O(N) N: length of LinkedList
Space: O(N) -> call stack via recursion
*/
function removeNthFromEndRecursively(head, n) {
  let length = 0;
  let headPointer = head;

  const traverseThroughList = (node, prev, n, i) => {
    
    if(node) {
      length++;

      if(node.next) {
        traverseThroughList(node.next, node, n, i + 1);
      } else {
        if(n === 1) {
          node = [];
        }
      }
    }
  
    if(node.next && i === length - n + 1) {
      prev.next = node.next;
    }
  
  }


  traverseThroughList(head, null, n, 1);

  return headPointer;
}


/*
Iterate 2 pointers at a time.
Time: O(N) N: length of LinkedList
Space: O(1)
*/

function removeNthFromEnd(head, n) {

  let endPointer = head;
  let k = 0;

  //establish pointer at nth position from beginning
  while(k < n) {//2
    k++;
    endPointer = endPointer.next;
  }

  let prevPointer = head;

  if(!prevPointer.next && !endPointer) {
    return [];
  }


  while(endPointer.next) {

    endPointer  = endPointer.next;
    prevPointer = prevPointer.next;

  }


  prevPointer.next = endPointer;

  return head;
}

module.exports = {removeNthFromEnd};