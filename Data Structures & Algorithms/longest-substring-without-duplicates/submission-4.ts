class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s: string): number {
    let map = new Map();

    let l = 0,
      res = 0;

    for (let r = 0; r < s.length; r++) {
      //check if it in the map
      if (map.has(s[r])) {
        l = Math.max(l, map.get(s[r]) + 1); //get the latest pos, then update
      }

      map.set(s[r], r); //update the index

      res = Math.max(res, r - l + 1); //get the max window
    }

    return res;
  }
}
