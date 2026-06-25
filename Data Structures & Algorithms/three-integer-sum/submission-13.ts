class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break; // cannot be negative
      if (i > 0 && nums[i] === nums[i - 1]) continue; //skip duplicate

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum < 0) left++;
        else if (sum > 0) right--;
        else {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        }
      }
    }
    return res;
  }
}