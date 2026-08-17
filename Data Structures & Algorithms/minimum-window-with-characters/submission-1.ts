class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s: string, t: string): string {
    if (t === "") {
      return "";
    }

    let countT: Record<string, number> = {};
    let window: Record<string, number> = {};

    //store the frequency of t values
    for (let c of t) {
      countT[c] = (countT[c] || 0) + 1;
    }

    //save the  indices of min sub string
    let res = [-1, -1];
    let resLen = Infinity;

    let l = 0;
    let have = 0;
    let need = Object.keys(countT).length;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      window[c] = (window[c] || 0) + 1;

      if (countT[c] && window[c] === countT[c]) {
        have++;
      }

      //shrink the window
      while (have === need) {
        //get the min  < resLen
        if (r - l + 1 < resLen) {
          res = [l, r];
          resLen = r - l + 1;
        }

        let ch = s[l];
        //decrement the leftmost letter
        window[ch]--;
        //if not valid anymore
        if (countT[ch] && window[ch] < countT[ch]) {
          have--; //decrement  have
        }
        l++; //increment L
      }
    }

    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
  }
}
