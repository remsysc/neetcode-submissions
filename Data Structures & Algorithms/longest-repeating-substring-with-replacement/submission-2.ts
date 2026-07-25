class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let res = 0;
    let count : {[key:string] : number} = {};


      let maxF = 0,
        l = 0;
      for (let r = 0; r < s.length; r++) {
       count[s[r]] = (count[s[r]] || 0) + 1
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
