class Solution {
public:
 std::vector<int> productExceptSelf(std::vector<int> &nums)
{
    std::unordered_map<std::string, int> mp = {};
    std::vector<int> res = {};

    int total = 1;
    int const SIZE = nums.size();

    for (int i = 0; i < SIZE; i++)
    {

        for (int j = 0; j < SIZE; j++)
        {

            if (j == i)
                continue;
            ;

            std::string tmp = std::to_string(total) + "*" + std::to_string(nums[j]);
            if (mp.find(tmp) == mp.end())
            {

                mp[tmp] = total * nums[j];
                total *= nums[j];
            }
            else
            {

                total = mp[tmp];
            }
        }

        res.push_back(total);
        total = 1;
    }

    return res;
}


};
