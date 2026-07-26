class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let l = 0,
      maxF = 0,
      res = 0;
    //stores the count of the letter
    let count: { [key: string]: number } = {};

    //iterates the whole array
    for (let r = 0; r < s.length; r++) {
      //store the current letter: get the curr value if null? 0 :  +=1;
      count[s[r]] = (count[s[r]] || 0) + 1;
      //get the current maxF every update; we dont care which letter it is
      maxF = Math.max(maxF, count[s[r]]);
      //check if  curr window  - maxF is > k if true ? can still replace : out of replacements hence move the window
      if (r - l + 1 - maxF > k) {
        //decrement the left window from the count
        count[s[l]]--;
        //move the pointer
        l++;
      }
      //check the current Max, res or  current window
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}
