class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    
    let minBuy = prices[0];
    let maxProfit = 0;

    for(let sell of prices){
      minBuy = Math.min(minBuy, sell);
      maxProfit = Math.max(maxProfit, sell - minBuy);
    }

    return maxProfit;
  }
}