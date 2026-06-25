class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let result = 0;

    while (left < right) {
      const area =
        Math.abs(left - right) * Math.min(heights[left], heights[right]);
      result = Math.max(result, area);

      if (heights[left] < heights[right]) left++;
      else right--;
    }
    return result;
  }
}