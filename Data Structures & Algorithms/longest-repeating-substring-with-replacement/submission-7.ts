class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let count: Record<string, number> = {};

    let res = 0,
      maxF = 0,
      l = 0;

    for (let r = 0; r < s.length; r++) {
      count[s[r]] = (count[s[r]] || 0) + 1; //get and save the current value then + 1;
      maxF = Math.max(maxF, count[s[r]]); //check the latest max  frequency;

      //current windows - maxf > k, checks if we can still substitute
      if (r - l + 1 - maxF > k) {
        count[s[l]]--; //decrement the value
        l++; //shrink the window
      }

      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}
