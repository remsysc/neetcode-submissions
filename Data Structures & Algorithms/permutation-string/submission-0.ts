class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const target = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        const index = (c: string) => c.charCodeAt(0) - 97; //gets the index of the character in the alphabet

        for (let i = 0; i < s1.length; i++) {
            target[index(s1[i])]++;
            window[index(s2[i])]++;
        }

        function same(): boolean {
            for (let i = 0; i < 26; i++) {
                if (target[i] !== window[i]) return false;
            }
            return true;
        }

        if (same()) return true;

        let l = 0;
        //so basically we slide the window across s2, adding the next character and removing the first character
        for (let r = s1.length; r < s2.length; r++) {
            window[index(s2[r])]++;
            window[index(s2[l])]--;
            l++;

            if (same()) return true;
        }

        return false;
    }
}
