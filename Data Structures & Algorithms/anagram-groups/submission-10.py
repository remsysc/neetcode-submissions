from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:  # pyright: ignore[reportReturnType]

        res = defaultdict(list)

        for str in strs:
            count: list[int] = [0] * 26
            for c in str:
                count[ord(c) - ord("a")] += 1
            res[tuple(count)].append(str)
        return list(res.values())