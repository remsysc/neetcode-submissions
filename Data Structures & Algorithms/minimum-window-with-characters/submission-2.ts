class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s: string, t: string): string {
    //return an empty substring to look
    if (t === "") {
      return "";
    }

    //frequency tables
    let countT: Record<string, number> = {};
    let window: Record<string, number> = {};

    //get the frequency of t values
    for (let c of t) {
      countT[c] = (countT[c] || 0) + 1;
    }

    let have = 0,
      need = Object.keys(countT).length; //get the keys of counT
    let l = 0;
    let res = [-1, -1];
    let resLen = Infinity;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      window[c] = (window[c] || 0) + 1; //update the window table

      //check if exist on countT
      if (countT[c] && window[c] === countT[c]) {
        have++;
      }

      while (have === need) {
        //update the latest min substr
        if (r - l + 1 < resLen) {
          res = [l, r];
          resLen = r - l + 1;
        }

        let ch = s[l];
        window[ch]--; //remove the leftmost character
        l++; //update the lest most pointer
        //check if the curr letter is less than the required
        if (countT[ch] && window[ch] < countT[ch]) {
          have--;
        }
      }
    }

    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
  }
}
