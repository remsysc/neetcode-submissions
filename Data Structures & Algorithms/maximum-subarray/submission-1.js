class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let res = nums[0];
    let maxSub = res;

    for (let i = 1; i < nums.length; i++) {
      if (res < 0) res = 0;
      res += nums[i];
      maxSub = Math.max(maxSub, res);
    }
    return maxSub;
  }
}