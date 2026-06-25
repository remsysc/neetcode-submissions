class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let map = new Map();
    let l = 0,
      res = 0,
      r = 0;

    while (r < s.length) {
      if (map.has(s[r])) {
        // repeating occured;
        l = Math.max(map.get(s[r]) + 1, l);
      }
      map.set(s[r], r);
      res = Math.max(res, r - l + 1);
      r++;
    }

    return res;
  }
}