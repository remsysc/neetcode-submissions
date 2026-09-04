class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let window: Record<string, number> = {};
    let maxF = 0,
      res = 0,
      l = 0;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      window[c] = (window[c] || 0) + 1;
      maxF = Math.max(maxF, window[c]);

      if (r - l + 1 - maxF > k) {
        window[s[l]]--;
        l++;
      }
      res = Math.max(res, r - l + 1);
    }

    return res;
  }
}
