/*
#23 https://leetcode.com/problems/merge-k-sorted-lists
Time: O(N) N: Total length of all LinkedList
Space: O(1)
*/


function mergeKLists(lists) {
  if(!lists.length) return null;

  let mergedListHead = null;
  let mergedListEnd = null;

  let leastTwoNumbers = [];
  let leastTwoNumbersIndexes = [];

  let numbersAvailable = true;
  while(numbersAvailable) {
    //loop through lists, find 2 heads with least number.
    for(let i = 0; i < lists.length; i++) {
      if(lists[i] === null) continue;

      if(!leastTwoNumbers.length) {
        leastTwoNumbers[0] = lists[i];
        leastTwoNumbersIndexes[0] = i;
      } else if(leastTwoNumbers.length === 1) {
        leastTwoNumbers[1] = lists[i];
        leastTwoNumbersIndexes[1] = i;

        //switch places if out of order
        if(leastTwoNumbers[0].value >= leastTwoNumbers[1].value) {
          let temp = leastTwoNumbers[0];
          leastTwoNumbers[0] = leastTwoNumbers[1];
          leastTwoNumbers[1] = temp;

          temp = leastTwoNumbersIndexes[0];
          leastTwoNumbersIndexes[0] = leastTwoNumbersIndexes[1];
          leastTwoNumbersIndexes[1] = temp;
        }

      } else {
        if(lists[i].value <= leastTwoNumbers[0].value) {
          //replace least node
          leastTwoNumbers[1] = leastTwoNumbers[0];
          leastTwoNumbersIndexes[1] = leastTwoNumbersIndexes[0];
          leastTwoNumbers[0] = lists[i];
          leastTwoNumbersIndexes[0] = i;
        } else if(leastTwoNumbers[0].value < lists[i].value && lists[i].value < leastTwoNumbers[1].value) {
          leastTwoNumbers[1] = lists[i];
          leastTwoNumbersIndexes[1] = i;
        }
      }
    }

    if(!mergedListHead) {
      mergedListHead = leastTwoNumbers[0];
    }

    if(!leastTwoNumbers.length) break;

    if(leastTwoNumbers.length < 2) {
      numbersAvailable = false;
      if(mergedListEnd) mergedListEnd.next = leastTwoNumbers[0];
    } else if(leastTwoNumbers.length === 2) {
      if(mergedListEnd) {
        mergedListEnd.next = leastTwoNumbers[0];
      }

      //set the new head of unmerged lists
      let listIndex1 = leastTwoNumbersIndexes[0];
      let listIndex2 = leastTwoNumbersIndexes[1];

      lists[listIndex1] = lists[listIndex1].next;
      lists[listIndex2] = lists[listIndex2].next;

      //check if the lowest number's linkedlist has numbers that is less than "second" lowest number
      while(leastTwoNumbers[0].next && leastTwoNumbers[0].next.value < leastTwoNumbers[1].value) {
        leastTwoNumbers[0] = leastTwoNumbers[0].next;
        lists[listIndex1] = lists[listIndex1].next;
      }

      leastTwoNumbers[0].next = leastTwoNumbers[1];

      mergedListEnd = leastTwoNumbers[1];

      leastTwoNumbers = [];
      leastTwoNumbersIndexes = [];

    }
  }

  return mergedListHead;
}

module.exports = {mergeKLists}