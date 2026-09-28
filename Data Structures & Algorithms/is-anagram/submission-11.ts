class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    const map: Record<string, number> = {};
    const map2: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
      map[s[i]] = (map[s[i]] || 0) + 1;
      map2[t[i]] = (map2[t[i]] || 0) + 1;
    }

    for (const key in map) {
      if (map[key] !== map2[key]) {
        return false;
      }
    }

    return true;
  }
}