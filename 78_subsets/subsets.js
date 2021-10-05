/*
#78 https://leetcode.com/problems/subsets (verified)
Time: O(N * 2^N) Each step, the subsets double
Space: O(N * 2^N)
*/

function subsetsIterative(nums) {
  const subset = [[]];
    
    for (let i = 0; i < nums.length; i++) {

        // set subset length before iteration that increases the subset
        const n = subset.length;
        for (let j = 0; j < n; j++) { 
            const copy = subset[j].slice();
            copy.push(nums[i]);
            subset.push(copy);
        }
    }
    
    return subset;
}

/*
[1, 2, 3]
[[], [1]]
0

[1, 2, 3]
[[], [1]]
1
*/

function _subsets(nums, output, current = [], index = 0) {
  //base case
  if (index === nums.length) {
    const copy = current.slice();
    output.push(copy);
    return;
  }
  
  current.push(nums[index]);
  _subsets(nums, output, current, index + 1);
  current.pop();
  _subsets(nums, output, current, index + 1);
  
}

function subsetsRecursive(nums) {
  const output = [];
  _subsets(nums, output);
  return output;
}