class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    if (numbers.length <= 1) return [];

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1];
      }
      if (sum < target) left++;
      else right--;
    }
  }
}