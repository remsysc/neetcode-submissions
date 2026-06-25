class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let l = 0;
    let r = 1;
    let maxProfit = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        // min buy is still lower than current price, we can sell
        maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
      } else {
        l = r; // found a new min buy;
      }
      r++;
    }

    return maxProfit;
  }
}