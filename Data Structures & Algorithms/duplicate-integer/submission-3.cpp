class Solution {
public:

bool hasDuplicate(std::vector<int> &nums)
{
    std::unordered_map<int, int> map;

    for (size_t i = 0; i < nums.size(); i++)
    {
        if (map.find(nums[i]) != map.end())
            return true;

        else
            map[nums[i]]++;
    }

    return false;
}



};
