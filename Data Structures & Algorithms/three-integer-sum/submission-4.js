class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const target = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0)
        // nums[i] cant be positive
        break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        }
      }
    }
    return result;
  }
}
