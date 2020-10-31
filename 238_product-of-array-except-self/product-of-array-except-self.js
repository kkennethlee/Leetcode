/*
#238 https://leetcode.com/problems/product-of-array-except-self/ (verified)
*/

/*
Brute Force
Time: O(N^2) N: length of nums
Space: O(N)
*/
function _productExceptSelf(nums) {
  let products = [];

  for(let i = 0; i < nums.length; i++) {
    let product = 1;
    for(let j = 0; j < nums.length; j++) {
      if(i === j) continue;
      product *= nums[j];
    }
    products[i] = product;
  }
  return products;
}

/*
Iterative method
Time: O(3N) -> O(N);
Space: O(2N) -> O(N);
*/
function productExceptSelf(nums) {
  //iterate from left to right
  let product = 1; //6
  let leftToRight = [1];
  for(let i = 1; i < nums.length; i++) {
    product = product * nums[i-1];
    leftToRight[i] = product;
  }

  //iterate from right to left
  product = 1; //24
  let rightToLeft = [];
  rightToLeft[nums.length-1] = 1;
  for(let i = nums.length - 2; i >= 0; i--) {//i = 0
    product = product * nums[i+1]; //12 * 2

    rightToLeft[i] = product;
  }

  //multiply the resulting 2 arrays together
  for(let i = 0; i < nums.length; i++) {
    nums[i] = leftToRight[i] * rightToLeft[i];
  }

  return nums;
}

module.exports = {productExceptSelf};