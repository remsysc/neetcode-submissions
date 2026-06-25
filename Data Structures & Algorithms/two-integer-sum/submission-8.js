class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map();
    let res = [];

    for (let i = 0; i < nums.length; i++) {
      const part = target - nums[i];

      if (map.has(part)) {
        res.push(map.get(part), i);
      } else {
        map.set(nums[i], i);
      }
    }
    return res;
  }
}