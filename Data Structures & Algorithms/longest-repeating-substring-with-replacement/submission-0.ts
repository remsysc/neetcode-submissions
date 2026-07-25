class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let res = 0;
    let charSet = new Set(s);

    for (let c of charSet) {
      let maxF = 0,
        l = 0;
      for (let r = 0; r < s.length; r++) {
        if (s[r] === c) {
          maxF++;
        }

        while (r - l + 1 - maxF > k) {
          if (s[l] === c) {
            maxF--;
          }
          l++;
        }
        res = Math.max(res, r - l + 1);
      }
    }
    return res;
  }
}
