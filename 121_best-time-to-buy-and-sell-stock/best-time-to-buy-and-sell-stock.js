/*
#121 https://leetcode.com/problems/best-time-to-buy-and-sell-stock
*/

/*
Brute force
Time: O(N^2) N: length of prices
Space: O(N)
*/
function maxProfit(prices) {

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

module.exports = {maxProfit};