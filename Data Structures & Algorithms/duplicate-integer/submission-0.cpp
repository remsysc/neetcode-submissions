class Solution {
public:
    bool hasDuplicate(std::vector<int>& nums) {

        std::sort(nums.begin(),nums.end());
        const int SIZE = nums.size();
        for(int i = 1; i < SIZE;i++){

            if(nums[i] == nums[i-1])
                return true;

        }

        return false;

    }
};
