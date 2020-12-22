/*
#24 https://leetcode.com/problems/swap-nodes-in-pairs (verified)
Time: O(N) N: length of list
Space: O(1)
*/

function swapPairs(head) {
  let first = head;

  if(!first || !first.next) return head;

  let second = head.next;

  if(!second.next) {
    second.next = first;
    first.next = null;
    return second;
  }

  let third = head.next.next;

  //initiate 1st pointer swaps
  second.next = first;
  first.next = third;

  if(!third.next) return second;

  const newHead = second;

  //shift pointers
  second = third;
  third = third.next;

  while(first && second && third) {
    first.next = third;
    second.next = third.next;
    third.next = second;

    first = first.next.next;

    //watch out for end of list
    if(!first.next) break;
    second = first.next;

    if(!second.next) break;
    third = second.next;
  }

  return newHead;
}

module.exports = {swapPairs}