class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let count: { [key: string]: number } = {};
    let l = 0,
      res = 0,
      maxF = 0;
    for (let r = 0; r < s.length; r++) {
      count[s[r]] = (count[s[r]] || 0) + 1;
      maxF = Math.max(maxF, count[s[r]]);
      if (r - l + 1 - maxF > k) {
        count[s[l]]--;
        l++;
      }
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}
