class Solution {
public:


std::vector<int> productExceptSelf(const std::vector<int> &nums)
{

    std::vector<int> res;
    res.reserve(nums.size());

    for (int i = 0; i < nums.size(); i++)
    {
        int total = 1;
        for (int j = 0; j < nums.size(); j++)
        {

            if (i == j)
            {
                continue;
            }
            total *= nums[j];
        }

        res.push_back(total);
    }
    return res;
}


};
