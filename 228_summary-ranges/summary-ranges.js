/*
#228 https://leetcode.com/problems/summary-ranges 
Time: O(N)
Space: O(N)
*/

//Solution with time limit esceeded
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

function summaryRanges(nums) {
  
}

module.exports = {summaryRanges}