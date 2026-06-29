class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
      //i cannot be positive
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

      let left = i + 1;
      let right = nums.length - 1;
      let target = -nums[i];
      while (left < right) {
        const currentSum = nums[left] + nums[right];
        if (currentSum === target) {
          res.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
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