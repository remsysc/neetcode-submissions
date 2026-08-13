class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    let targetWindow: number[] = new Array(26).fill(0);
    let currentWindow: number[] = new Array(26).fill(0);

    let res = 0,
      l = 0;

    //to get the index of a character
    let index = (c: string) => c.charCodeAt(0) - 97;

    //initialzie the first windows
    for (let i = 0; i < s1.length; i++) {
      targetWindow[index(s1[i])]++;
      currentWindow[index(s2[i])]++;
    }
    if (targetWindow.toString() === currentWindow.toString()) {
      return true;
    }

    //permutation have a fixed length, so they must start after the s1.length
    for (let r = s1.length; r < s2.length; r++) {
      currentWindow[index(s2[r])]++; //grow & shrinks the window
      currentWindow[index(s2[l])]--;
      l++;

      //checks if matched
      if (targetWindow.toString() === currentWindow.toString()) {
        return true;
      }
    }
    return false;
  }
}
