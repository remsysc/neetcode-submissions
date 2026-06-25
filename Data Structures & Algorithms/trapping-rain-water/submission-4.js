
class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      
    let left = 0;
    let right = height.length -1;
    let maxLeft = height[0];
    let maxRight = height[right];
    let result = 0;

    while(left < right){

      if(maxLeft <= maxRight){
        left++;
        maxLeft = Math.max(maxLeft,height[left]);
        result += Math.max(maxLeft - height[left], 0);
      }
      else{
        right--;
        maxRight = Math.max(maxRight, height[right]);
        result += Math.max(maxRight - height[right], 0);
      }
    }
    
    return result;

  }
}
