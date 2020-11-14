/*
#349 https://leetcode.com/problems/intersection-of-two-arrays
*/

/*
Brute Force Solution
Time: O(M * N) M: length of nums1 N: length of nums2
Space: O(M + N)
*/
function _intersection(nums1, nums2) {
  let nums = {};
  for(let i = 0; i < nums1.length; i++) {
    for(let j = 0; j < nums2.length; j++) {
      if(nums1[i] === nums2[j] && !nums.hasOwnProperty(nums1[i])) {
        nums[nums1[i]] = true;
      }
    }
  }

  nums = Object.keys(nums);

  //convert strings to int
  for(let i = 0; i < nums.length; i++) {
    nums[i] = parseInt(nums[i]);
  }

  return nums;
}


/*
Solution using separate iteration
Time: O(M + N) M: length of nums1 N: length of nums2
Space: O(M)
*/
function createTable(nums) {
  const hash = {};

  for(let i = 0; i < nums.length; i++) {
    if(!hash.hasOwnProperty(nums[i])) {
      hash[nums[i]] = true;
    }
  }

  nums = null;
  return hash;

}

function intersection(nums1, nums2) {
  let hash = null;
  let longer = null;
  if(nums1.length >= nums2.length) {
    hash = createTable(nums2);
    longer = nums1;
  } else {
    hash = createTable(nums1);
    longer = nums2;
  }

  let outputs = [];

  for(let i = 0; i < longer.length; i++) {
    const num = longer[i];

    if(hash.hasOwnProperty(num)) {
      outputs.push(num);
      delete hash[num];
    }
  }

  return outputs;
}

module.exports = {intersection}