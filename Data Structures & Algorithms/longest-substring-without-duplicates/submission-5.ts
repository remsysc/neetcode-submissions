class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s: string): number {
    let window: { [key: string]: number } = {};

    let l = 0,
      res = 0;
    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      window[c] = (window[c] || 0) + 1;
      while (window[c] > 1) {
        window[s[l]]--;
        l++;
      }
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}
