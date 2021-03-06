/*
#121 https://leetcode.com/problems/best-time-to-buy-and-sell-stock (verified)
*/

/*
Brute force
Time: O(N^2) N: length of prices
Space: O(1)
*/
function __maxProfit(prices) {

  let buy = null;
  let max = 0;

  for(let i = 0; i < prices.length; i++) {
    buy = prices[i];
    for(let j = i; j < prices.length; j++) {
      const profit = prices[j] - buy;
      max = Math.max(max, profit);
    }
  }

  return max;
}

/*
Iterative strategy with Kadane's algorithm
Time: O(2N) -> O(N) N: length of prices
Space: O(N)
*/
function _maxProfit(prices) {
  let diffs = [0];
  for(let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i-1];
    diffs.push(diff);
  }

  let max = 0;

  for(let i = 1; i < diffs.length; i++) {
    diffs[i] = Math.max(diffs[i], diffs[i-1] + diffs[i]);
    max = Math.max(max, diffs[i]);
  }

  return max;
}

/*
Iterative strategy
Time: O(N) N: length of prices
Space: O(1)
*/
function maxProfit(prices) {
  let max = 0;
  let buyPoint = Infinity;

  for(let i = 0; i < prices.length; i++) {
    buyPoint = Math.min(buyPoint, prices[i]);
    max = Math.max(max, prices[i] - buyPoint);
  }
  return max;
}

module.exports = {maxProfit};