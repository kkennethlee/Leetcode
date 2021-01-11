/*
#777 https://leetcode.com/problems/longest-increasing-subsequence (verified)
*/

/*
Dynamic programming solution

Time: O(N^2) N: number of nums
Space: O(N)
*/
function _lengthOfLIS(nums) {
  let array = new Array(nums.length).fill(1);

  let max = 1;

  for(let i = 0; i < nums.length; i++) {

    for(let j = i + 1; j < nums.length; j++) {

      if(nums[j] > nums[i]) {
        array[j] = Math.max(array[j], array[i] + 1);
        max = Math.max(array[j], max);
      }
    }

  }

  return max;
}

/*
binary search programming solution

Time: O(N Log(N)) N: number of nums
Space: O(N)
*/
function lengthOfLIS(nums) {

  const array = [nums[0]];

  const binarySearch = (n) => {
    let l = 0;
    let r = array.length - 1;
    let m = null;
    while(l < r) {
      m = Math.floor((l + r) / 2);
      if(n <= array[m]) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    
    array[r] = n;
  }

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < array[0]) {
      array[0] = nums[i];
    } else if(array[array.length - 1] < nums[i]) {
      array.push(nums[i]);
    } else {
      binarySearch( nums[i] );
    }
  }

  return array.length;

}

module.exports = {lengthOfLIS};