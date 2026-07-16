class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height: number[]): number {
    let l = 0,
      r = height.length - 1;
    let lMax = height[l],
      rMax = height[r];
    let res = 0;

    while (l < r) {
      if (lMax < rMax) {
        l++;
        lMax = Math.max(lMax, height[l]);
        res += lMax - height[l];
      } else {
        r--;
        rMax = Math.max(rMax, height[r]);
        res += rMax - height[r];
      }
    }
    return res;
  }
}

// 2 pointer technique