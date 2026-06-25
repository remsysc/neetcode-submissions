class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  maxProfit(prices) {
    //buy and sell
    //
    let minBuy = prices[0];
    let maxProfit = 0;
    
    for(let sell of prices){
      maxProfit = Math.max(maxProfit,sell - minBuy);
      minBuy = Math.min(minBuy, sell);
    }
    return maxProfit;
     }
}
 