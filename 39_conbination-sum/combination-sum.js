/*
#39 https://leetcode.com/problems/combination-sum (verified)
Time: O(N! * N + N Log(N)) -> O(N!) N: candidates 
Space: O(N)
*/

function combinationSum(candidates, target) {

  if(!candidates.length) return [];
  candidates.sort((a, b) => a - b);

  const sums = [];

  const backtracking = (combo, startingIndex, target) => {

    if(target === 0) {
      sums.push([...combo]);
      return;
    }

    for(let i = startingIndex; i < candidates.length; i++) {
      const n = candidates[i];

      if(target >= n) {
        combo.push(n);
        backtracking(combo, i, target - n);
        combo.pop(n);
      } else {
        return;
      }

    }

  }

  backtracking([], 0, target);

  return sums;
}

module.exports = {combinationSum};