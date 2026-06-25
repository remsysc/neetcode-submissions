class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let l = 0;
    let r = height.length;
    let leftMax = height[l];
    let rightMax = height[r - 1];
    let res = 0;

    while (l < r) {
      if (leftMax < rightMax) {
        l++;
        leftMax = Math.max(leftMax, height[l]);
        res += leftMax - height[l];
      } else {
        r--;
        rightMax = Math.max(rightMax, height[r]);
        res += rightMax - height[r];
      }
    }

    return res;
  }
}