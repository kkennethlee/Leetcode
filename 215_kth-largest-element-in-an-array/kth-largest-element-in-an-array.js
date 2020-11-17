/*
#215 https://leetcode.com/problems/kth-largest-element-in-an-nums (verified)
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
Time: O(N) N: length of nums
Space: O(log(N))
*/
function findKthLargest(nums, k) {

  let kthLargest = null;

  const quickSelect = (start, end) => {
    //1st element to the pivot, swap with last element
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    let pivotNumber = nums[nums.length-1];

    let partition = start;
    let index = start;

    while(index < end) {

      if(pivotNumber > nums[index]) {
        //swap with beginning
        let temp = nums[partition];
        nums[partition] = nums[index];
        nums[index] = temp;
        
        partition++;
      }
      index++;

    }

    //switch pivot index and partition index
    temp = nums[partition];
    nums[partition] = nums[nums.length-1];
    nums[nums.length-1] = temp;


    //divide and conquer here.
    const kthIndex = nums.length - k;

    if(kthIndex > partition) {
      //nums ranging from partition + 1 and end of nums;
      quickSelect(partition + 1, end);
    } else if(kthIndex < partition) {
      quickSelect(start, partition);
    } else {
      kthLargest = nums[kthIndex];
    }

  }


  if(nums.length >= k) {
    quickSelect(0, nums.length - 1);
  }

  return kthLargest;
}

module.exports = {findKthLargest}