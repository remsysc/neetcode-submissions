class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) break; // cannot be positive
      if (i > 0 && nums[i] === nums[i - 1]) continue; //skip duplicate

      let left = i + 1;
      let right = nums.length - 1; //  nums[l] nums[r] = -nums[i]
      const target = -nums[i];

      while (left < right) {
        const currentSum = nums[left] + nums[right];

        if (currentSum === target) {
          res.push([nums[i], nums[left], nums[right]]);
          //dedupe left & right
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          //move to the non duplicate number;
          left++;
          right--;
        } else if (currentSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
    return res;
  }
}