class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
      return false;
    }

    let target = new Array(26).fill(0);
    let window = new Array(26).fill(0);

    const index = (c: string) => c.charCodeAt(0) - "a".charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
      target[index(s1[i])]++;
      window[index(s2[i])]++;
    }

    if (target.toString() === window.toString()) {
      return true;
    }

    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
      let c = s2[r];
      window[index(c)]++;
      let ch = s2[l];
      window[index(ch)]--;
      l++;

      if (target.toString() === window.toString()) return true;
    }
    return false;
  }
}
