class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let l = 0,
      r = numbers.length - 1;
    let res = [];

    while (l < r) {
      const sum = numbers[l] + numbers[r];
      if (sum < target) l++;
      else if (sum > target) r--;
      else {
        res.push(l + 1, r + 1);
        break;
      }
    }

    return res;
  }
}