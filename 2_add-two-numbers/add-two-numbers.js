/*
https://leetcode.com/problems/add-two-numbers

Time: O(N) N: length of longer listedlist
Space: O(N)


*/
function traverseLinkedList(longer, shorter) {
  let sums = [];
  for(let i = 0; i < longer.length; i++) {
    if (shorter[i] === undefined) {
      shorter[i] = 0;
    }

    if(sums[i] === undefined) {
      sums[i] = 0;
    } 

    let sum = shorter[i] + longer[i] + sums[i];

    if(sum >= 10) {
      let carryOver = Math.floor(sum / 10);
      let leftOver = sum % 10;

      sums[i] = leftOver;

      if(sums[i + 1]  === undefined) {
        sums[i + 1] = 0;
      }
      sums[i + 1] += carryOver;
    } else {
      sums[i] = sum;
    }

  }

  return sums;
}

function addTwoNumbers(l1, l2) {
  if(l1.length >= l2.length) {
    return traverseLinkedList(l1, l2);
  } else {
    return traverseLinkedList(l2, l1);
  }
}

module.exports = {addTwoNumbers};