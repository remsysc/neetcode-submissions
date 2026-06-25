class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {

        std::unordered_map<int,int> map{};
        int kSize = nums.size();
        
        for(int i = 0;i < kSize;i++){

            int comple = target - nums[i];

            if(map.find(comple)!= map.end())
                return {map.find(comple)->second, i};
            else
                map.insert({nums[i], i});
        }
        
        return {};


    }
};
