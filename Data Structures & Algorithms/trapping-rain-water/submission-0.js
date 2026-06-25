class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    const maxLeft = [0];
    for (let i = 1; i < height.length; i++) {
      maxLeft.push(Math.max(maxLeft[i - 1], height[i - 1]));
    }
    const maxRight = new Array(height.length).fill(0);
    for (let i = height.length - 2; i >= 0; i--) {
      maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
    }
    const min = [];
    for (let i = 0; i < height.length; i++) {
      min.push(Math.min(maxLeft[i], maxRight[i]));
    }

    const result = [];

    for (let i = 0; i < height.length; i++) {
      const n = min[i] - height[i];
      result.push(Math.max(0, n));
    }
    return result.reduce((a, b) => a + b, 0);
  }
}