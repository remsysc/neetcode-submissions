class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    
    // buy and sell, or buy but no profit = 0;
    //
    let profit = 0;

    for(let i = 0; i < prices.length;i++){
      
      for(let j = i; j < prices.length;j++ ){
        if(!(prices[j] <= prices[i]))
        profit = Math.max(profit, prices[j] - prices[i]);
      }
    }
    
    return profit;

  }
}
