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

    for (let c of t) {
      countT[c] = (countT[c] || 0) + 1;
    }
    let have = 0,
      need = Object.keys(countT).length;
    let res = [-1, -1];
    let resLen = Infinity;

    let l = 0,
      sLen = s.length;

    for (let r = 0; r < sLen; r++) {
      let c = s[r];
      window[c] = (window[c] || 0) + 1;

      if (countT[c] && window[c] === countT[c]) {
        have++;
      }

      while (have === need) {
        if (r - l + 1 < resLen) {
          res = [l, r];
          resLen = r - l + 1;
        }

        let ch = s[l];
        window[ch]--;
        l++;
        if (countT[ch] && window[ch] < countT[ch]) {
          have--;
        }
      }
    }

    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
  }
}