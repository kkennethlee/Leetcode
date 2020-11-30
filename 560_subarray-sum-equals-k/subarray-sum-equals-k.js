/*
#560 https://leetcode.com/problems/subarray-sum-equals-k
*/

/*
Brute force method
Time: O(N^2) N: length of input
Space: O(1)
*/
function _subarraySum(num, k) {
  let count = 0;
  let sum = 0;
  for(let i = 0; i < num.length; i++) {
    sum = num[i];

    //check single element
    if(sum === k) {
      count++;
    }

    for(let j = i + 1; j < num.length; j++) {
      sum += num[j];
      if(sum === k) {
        count++;
      }
    }
  }

  return count;
}

function subarraySum(num, k) {
  let count = 0;
  let sum = 0;

  let start = 0;
  for(let end = 0; end < num.length; end++) {
    sum += num[end];

    if(end > start) {

      while(sum > k) {
        sum -= num[start];
        start++;
      }
    }
  
    if(sum === k) {
      count++;
    }
  }

  sum -= num[start];
  start++;

  for(; start < num.length; start++) {
    if(sum === k) {
      count++;
    }

    sum -= num[start];
  }

  return count;
}



module.exports = {subarraySum}