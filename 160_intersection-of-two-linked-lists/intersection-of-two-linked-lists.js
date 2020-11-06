/*
#160 https://leetcode.com/problems/intersection-of-two-linked-lists (verified)

Time: O(2A + 2B) -> O(A+B) A: length of list A, B: length of list B 
Space: O(1)
*/

function getLengthOfList(head) {
  let count = 0;
  let node = head;
  while(node) {
    count++;
    node = node.next;
  }
  return count;
}

function getIntersectionNode(headA, headB) {
  if(headA === headB) return headA;

  let pointerA = headA;
  let pointerB = headB;

  let lengthA = getLengthOfList(headA); //5
  let lengthB = getLengthOfList(headB); //3

  let count = 0;
  if(lengthA > lengthB) {
    //set new head for pointerA
    while(count < lengthA - lengthB) {  //3
      count++;
      pointerA = pointerA.next;
    }
    
  } else if(lengthB > lengthA) {
    while(count < lengthB - lengthA) {
      count++;
      pointerB = pointerB.next;
    }
  }

  let intersection = null;

  //iterate both lists together until 
  while(pointerA && pointerB) {
    if(pointerA === pointerB) {
      intersection = pointerA;
      break;
    }
    
    pointerA = pointerA.next;
    pointerB = pointerB.next;
    
  }

  return intersection;
}


module.exports = {getIntersectionNode};