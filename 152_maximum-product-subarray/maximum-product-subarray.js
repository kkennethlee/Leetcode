/*
#152 https://leetcode.com/problems/maximum-product-subarray (verified)
Time: O(N)
Space: O(1)
*/

function maxProduct(nums) {
  if (!nums.length) return nums;
  if (nums.length === 1) return nums[0];

  let maximumProduct = -Infinity;

  let max = 1;
  let min = 1;

  for (let i = 0; i < nums.length; i++) {
    const product1 = nums[i] * max;
    const product2 = nums[i] * min;
    max = Math.max(product1, product2, nums[i]);
    min = Math.min(product1, product2, nums[i]);
    maximumProduct = Math.max(maximumProduct, max);
  }

  return maximumProduct;
}

module.exports = {maxProduct}