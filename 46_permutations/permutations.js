/*
https://leetcode.com/problems/permutations/ (verified)

Time: O(N * N * N!) //call stack, for loop, permutation factorial
Space: O(1)
*/

function _permute(nums, outputs, permutation = []) {
  if(!nums.length) {
    outputs.push([...permutation]);
    return;
  }

  for(let i = 0; i < nums.length; i++) {
    permutation.push(...nums.splice(i, 1));

    _permute(nums, outputs, permutation);

    //backtrack (put it back to previous state)
    let popped = permutation.pop();
    nums.splice(i, 0, popped);
  }
}


function permute(nums) {
  const outputs = [];
  _permute(nums, outputs);
  return outputs;
}

module.exports = {permute}