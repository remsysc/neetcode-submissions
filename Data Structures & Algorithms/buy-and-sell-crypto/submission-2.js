class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    
    // buy and sell, or buy but no profit = 0;
    let maxProfit = 0;
    let left = 0;
    let right = 1;

    while(right < prices.length){

      if(prices[left] < prices[right])// we can sell;
        maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        else{
          left = right; // new low 
        }
      right++;

    }
    return maxProfit;
  }
}
