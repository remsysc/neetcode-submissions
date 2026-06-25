class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let map = new Map();
    let l = 0;
    let r = 0;
    let res = 0;

    while (r < s.length) {
      if (map.has(s[r])) {
        l = Math.max(map.get(s[r]) + 1, l);
      }

      map.set(s[r], r);
      res = Math.max(res, r - l + 1);
      r++;
    }
    return res;
  }
}