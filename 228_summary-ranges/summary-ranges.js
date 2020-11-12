/*
#228 https://leetcode.com/problems/summary-ranges (verified)
*/

/*
Brute force solution with time limit esceeded
Time: O(N)
Space: O(N)
*/
function _summaryRanges(nums) {
  if(!nums.length) return [];
  if(nums.length === 1) return [nums[0] + ""];

  let start = nums[0];
  let end = nums[ nums.length - 1 ];

  const hash = {};
  let output = [];

  for(const num of nums) {
    if(!hash.hasOwnProperty(num)) {
      hash[num] = true;
    }
  }

  let beginRange = null;
  let endRange = null;

  for(let i = start; i <= end; i++) {
    if(beginRange === null && hash[i]) {
      beginRange = i;
    }

    if( beginRange !== null && (!hash[i] || i === end)) {
      if(i === end) {
        endRange = end;
      } else {
        endRange = i - 1;
      }

      let range = null;
      if(endRange === beginRange) {
        range = "" + beginRange;
      } else {
        range = `${beginRange}->${endRange}`
      }

      output.push(range);
      beginRange = null;
    }


  }

  return output;
}

/*
Iterative Sliding Window solution
Time: O(N)
Space: O(1)
*/
function summaryRanges(nums) {
  let output = [];
  if(!nums.length) return output;
  if(nums.length === 1) return [ '' + nums[0] ];

  //iterate through nums
  let beginRangeIndex = 0;

  let range = "";
  
  for(let i = 0; i < nums.length; i++) {
    let peek = i + 1;

    if(nums[peek] - nums[i] > 1 || i === nums.length - 1) {

      if(nums[beginRangeIndex] === nums[i]) {
        range = "" + nums[i];
      } else {
        range = `${nums[beginRangeIndex]}->${nums[i]}`;
      }

      output.push(range);

      beginRangeIndex = peek;
    }
  }

  return output;

}

module.exports = {summaryRanges}