/*
#215 https://leetcode.com/problems/kth-largest-element-in-an-array (verified)
*/

/*
Brute Force Method
Time: O(NLog(N)) N: length of nums
Space: O(1)
*/
function __findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

/*
Time: O(N + D) N: length of nums, D: difference between max number and min number
Space: O(N)
*/
function _findKthLargest(nums, k) {
  let hash = {};

  let max = -Infinity;
  let min = Infinity;

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    max = Math.max(max, num);
    min = Math.min(min, num);

    if(!hash[num]) {
      hash[num] = 0;
    }
    hash[num]++;
  }

  let count = 0;
  for(let i = max; i >= min; i--) {
    if(hash.hasOwnProperty(i)) {
      count += hash[i];
      if(count >= k) {
        return i;
      }
    }
  }
}

/*
Quick Select method
Time: O(N + D) N: length of nums, D: difference between max number and min number
Space: O(N)
*/
function findKthLargest(nums, k) {

  let kthLargest = null;

  const quickSelect = (array) => {
    //1st element to the pivot, swap with last element
    let temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;

    let pivotNumber = array[array.length-1];

    let partition = 0;
    let index = 0;

    while(index < array.length - 1) {

      if(pivotNumber > array[index]) {
        //swap with beginning
        let temp = array[partition];
        array[partition] = array[index];
        array[index] = temp;
        
        partition++;
      }
      index++;

    }

    //switch pivot index and partition index
    temp = array[partition];
    array[partition] = array[array.length-1];
    array[array.length-1] = temp;


    //divide and conquer here.
    const kthIndex = array.length - k;

    if(kthIndex > partition) {
      //array ranging from partition + 1 and end of array;
      let copy = array.slice(partition + 1, array.length);
      quickSelect(copy);
    } else if(kthIndex < partition) {
      let copy = array.slice(0, partition + 1);
      quickSelect(copy);
    } else {
      kthLargest = array[kthIndex];
    }

  }

  if(nums.length >= k) {
    quickSelect(nums);
  }

  return kthLargest;
}

module.exports = {findKthLargest}