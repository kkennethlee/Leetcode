/*
#86 https://leetcode.com/problems/partition-list (verified)
*/

/*
Time: O(N) N: length of list
Space: O(N)
*/
function _partition(head, x) {
  if(!head) return head;

  let lessThan = [];
  let moreThan = [];

  let pointer = head;
  while(pointer) {

    if(pointer.value < x) {
      const lastNode = lessThan[lessThan.length - 1]
      if(lastNode) {
        lastNode.next = pointer;
      }
      lessThan.push(pointer);
    } else {
      const lastNode = moreThan[moreThan.length - 1];
      if(lastNode) {
        lastNode.next = pointer;
      }
      moreThan.push(pointer);
    }

    pointer = pointer.next;
  }

  if(!lessThan.length) return moreThan[0];

  if(moreThan.length) {
     //connect lessThan and moreThan
    lessThan[lessThan.length - 1].next = moreThan[0];
    //end after end of moreThan
    moreThan[moreThan.length - 1].next = null;
  }

  return lessThan[0];
}

/*
Time: O(N) N: length of list
Space: O(1)
*/
function partition(head, x) {
  if(!head) return head;

  let lessThanHead = null;
  let moreThanHead = null;
  let lessThanTail = null;
  let moreThanTail = null;

  let pointer = head;
  while(pointer) {

    if(pointer.value < x) {
      //const lastNode = lessThan[lessThan.length - 1]
      if(!lessThanHead) {
        lessThanHead = pointer;
        lessThanTail = pointer;
      } else {
        lessThanTail.next = pointer;
        lessThanTail = lessThanTail.next;
      }
    } else {
      if(!moreThanHead) {
        moreThanHead = pointer;
        moreThanTail = pointer;
      } else {
        moreThanTail.next = pointer;
        moreThanTail = moreThanTail.next;
      }
    }

    pointer = pointer.next;
  }

  if(!lessThanHead) return moreThanHead;

  if(moreThanHead) {
     //connect lessThan and moreThan
    lessThanTail.next = moreThanHead;
    //end after end of moreThan
    moreThanTail.next = null;
  }

  return lessThanHead;
}

module.exports = {partition};