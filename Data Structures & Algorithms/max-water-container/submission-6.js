class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
      const n = (right - left) * Math.min(heights[left], heights[right]);
      maxArea = Math.max(maxArea, n);

      if (heights[left] < heights[right]) left++;
      else right--;
    }

    return maxArea;
  }
}