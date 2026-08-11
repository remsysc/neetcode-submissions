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
      //check if  it  already in the map
      if (map.has(s[r])) {
        l = Math.max(l, map.get(s[r]) + 1); //get the  last position + 1 to  pass it
      }
      map.set(s[r], r); //update the letter to the latest  position
      res = Math.max(res, r - l + 1); //get the current longest substring
    }

    return res;
  }
}
