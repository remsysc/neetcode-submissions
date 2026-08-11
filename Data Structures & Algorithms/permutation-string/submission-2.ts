class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const targetArray = new Array(26).fill(0);
    const windowArray = new Array(26).fill(0);

    const index = (c: string) => c.charCodeAt(0) - "a".charCodeAt(0);

    //initial window
    for (let i = 0; i < s1.length; i++) {
      targetArray[index(s1[i])]++;
      windowArray[index(s2[i])]++;
    }

    if (Array.from(targetArray).join("") === Array.from(windowArray).join(""))
      return true;

    let left = 0;
    for (let i = s1.length; i < s2.length; i++) {
      windowArray[index(s2[i])]++;
      windowArray[index(s2[left])]--;
      left++;
      if (Array.from(targetArray).join("") === Array.from(windowArray).join(""))
        return true;
    }
    return false;
  }
}
