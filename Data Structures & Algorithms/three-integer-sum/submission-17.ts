class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0)
        // cant be  positive
        break;
      if (i > 0 && nums[i] === nums[i - 1])
        //skip duplicate
        continue;

      let left = i + 1;
      let right = nums.length - 1;
      const target = -nums[i];

      while (left < right) {
        const currentSum = nums[left] + nums[right];
        if (currentSum === target) {
          res.push([nums[left], nums[right], nums[i]]);
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