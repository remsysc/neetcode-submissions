class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let maxProfit = 0,
      l = 0,
      r = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        let profit = prices[r] - prices[l];
        maxProfit = Math.max(profit, maxProfit);
      } else {
        l = r;
      }
      r++;
    }
    return maxProfit;
  }
}