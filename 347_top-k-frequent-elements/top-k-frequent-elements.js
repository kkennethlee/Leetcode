/*
#347 https://leetcode.com/problems/top-k-frequent-elements (verified)
*/

/*
Brute Force w/ sorting
Time: O(N + N + NLog(N) + N) -> O(NLog(N)) N: length of nums array
Space: O(N + N ) -> O(N)
*/
function _topKFrequent(nums, k) {
  let hash = {};

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if(!hash.hasOwnProperty(num)) {
      hash[num] = 0;
    }
    hash[num]++;
  }

  let arr = [];
  for(let key in hash) {
    const value = hash[key];
    arr.push([key, value]);
  }

  //sort the array
  arr.sort((a, b) => b[1] - a[1]);
  nums = [];

  for(let i = 0; i < k; i++) {
    const num = parseInt(arr[i][0]);
    nums.push(num);
  }

  return nums;

}

/*
Time: O(N + N*K) -> O(N*K) N: length of nums array
Space: O(2N) -> O(N)
*/
function topKFrequent(nums, k) {
  const numToFreq = {};
  const freqToNum = {};

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(!numToFreq.hasOwnProperty(num)) {
      numToFreq[num] = 0;
    }
    numToFreq[num]++;

    if(!freqToNum.hasOwnProperty(numToFreq[num])) {
      freqToNum[numToFreq[num]] = []
    }
    freqToNum[numToFreq[num]].push(nums[i]);
  }

  const maxFreq = Object.keys(freqToNum).length;

  let output = [];

  for(let freq = maxFreq; freq >= 0; freq--) {
    let arr = freqToNum[freq];
    for(let i = 0; i < arr.length; i++) {
      if(output.indexOf(arr[i]) === -1) {
        output.push(arr[i]);
      }

      if(output.length === k) {
        return output;
      }
    }
  }
}

module.exports = {topKFrequent}