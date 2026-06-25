class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    //get the maxLeft and Right,  get the min of maxLeft and Right
    // then that min. - input to get the trap water;
    //
    //
    let maxLeft = [0];
    for (let i = 1; i < height.length; i++) {
      maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
      
    }

    let maxRight = new Array(height.length).fill(0);
    for(let i = height.length - 2; i >= 0; i--){
      maxRight[i] = Math.max(maxRight[i + 1], height[i+1]);
    }

    let min = [];

    for(let i = 0; i < height.length;i++){
          min.push(Math.min(maxRight[i], maxLeft[i]));
    }
    let res = 0;

    for(let i = 0; i < height.length;i++ ){
      res += Math.max(min[i] -  height[i], 0);
    }

    return res;




  }
}