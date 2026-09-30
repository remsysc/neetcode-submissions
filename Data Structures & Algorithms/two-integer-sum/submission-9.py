class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map : dict[int,int] = {}
        
        #target 7
        # 7 - 3 = 4

        for i, num in enumerate(nums):
            complement = target - num

            if complement in map:
                return [map[complement], i]
            map[num] = i;
        return []