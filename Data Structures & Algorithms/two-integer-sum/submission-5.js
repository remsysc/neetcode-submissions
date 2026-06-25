class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      //check if the other part is on the map?
      const part = target - nums[i];

      if (map.has(part)) {
        return Array.from([map.get(part), i]);
      } else {
        map.set(nums[i], i);
      }
    }
    return [];
  }
}