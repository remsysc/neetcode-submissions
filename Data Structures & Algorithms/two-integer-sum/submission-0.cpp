class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        
        std::unordered_map<int,int> map;
        const int SIZE =  nums.size();

        for(int i = 0 ; i < SIZE; i++){

            if(map.find(target - nums[i]) == map.end()){

                map[nums[i]] = i;
            }else{

                return {map[target - nums[i]], static_cast<int>(i)};
            }
        

        }
        

    }
};
