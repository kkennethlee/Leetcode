
function isTriplet(n1, n2, n3) {
  const sorted = [...arguments].sort((a, b) => a - b);
  return (Math.pow(sorted[0], 2) + Math.pow(sorted[1], 2) === Math.pow(sorted[2], 2));
}

//brute force method
//Time: O(N^3) N: length of nums
//Space: O(1)
function __findPythagoreanTriplets(nums) {
  for(let i = 0; i < nums.length - 2; i++) {
    for(let j = 1; j < nums.length -1; j++) {
      for(let k = 2; k < nums.length; k++) {
        if(isTriplet(nums[i], nums[j], nums[k])) {
          return true;
        }
      }
    } 
  }
  return false;
}

//Time: O(N^2 + NLog(N) + N) -> O(N^2)
//Space: O(1)
function _findPythagoreanTriplets(nums) {
  for(let i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
  }
  nums.sort((a, b) => a - b);

  //1, 3, 4, 5, 6

  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    let index = left + 1;
    while(index < right) {
      let netZero = nums[left] + nums[index] - nums[right];
      if(netZero < 0) {
        right--;
        index = left + 1;
      } else if(netZero > 0) {
        index++;
      } else {
        return true;
      }
    }
    right = nums.length - 1;
    left++;
  }

  return false;
}

//Time: O(N^2 + N) -> O(N^2)
//Space: O(N)
function findPythagoreanTriplets(nums) {
  let hash = {};

  for(let i = 0; i < nums.length; i++) {
    const squared = Math.pow(nums[i], 2);
    hash[squared] = true;
  }


  for(let i = 0; i < nums.length - 1; i++) {
    for(let j = 1; j < nums.length; j++) {
      if(hash[Math.pow(nums[i], 2) + Math.pow(nums[j], 2)]) {
        return true;
      }
    }
  }

  return false;
}

module.exports = {findPythagoreanTriplets};