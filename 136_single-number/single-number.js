
//Time: O(2N) -> O(N) N: length of nums
//Space: O(N)
function _singleNumber(nums) {
  if(nums.length === 1) {
    return nums[0];
  }

  const hash = {};
  for(const num of nums) {
    if(!hash[num]) {
      hash[num] = 0;
    }
    hash[num]++;
  }

  for(let key in hash) {
    if(hash[key] === 1) {
      return parseInt(key);
    }
  }

}

function singleNumber(nums) {
  let num = 0;
  for(const n of nums) {
    num  = num ^ n;
  }
  return num;
}


module.exports = {singleNumber}