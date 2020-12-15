/*
#307 https://leetcode.com/problems/range-sum-query-mutable (verified)
Time: See below
Space: O(N) N: number of nums (used to achieve O(1) time in sumRange)
*/

class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.sums = [];

    this.createSums();
  }

  /*
  Time: O(N) N: number of nums (uses createSums which is O(N))
  */
  update(i, val) {
    if(i < this.nums.length) {
      this.nums[i] = val;
      this.createSums();
    }
  }

  /*
  Time: O(N) N: number of nums
  */
  createSums() {
    this.sums = [this.nums[0]];

    for(let i = 1; i < this.nums.length; i++) {
      this.sums.push( this.sums[i-1] + this.nums[i]);
    }
  }

  /*
  Time: O(1)
  */
  sumRange(i, j) {
    if(i < 0) i = 0;
    if(j >= this.nums.length) j = this.nums.length - 1;
    
    if(i === 0) return this.sums[j];
    if(i === j) return this.nums[j];
    return this.sums[j] - this.sums[i - 1];
  }
}

module.exports = {NumArray}