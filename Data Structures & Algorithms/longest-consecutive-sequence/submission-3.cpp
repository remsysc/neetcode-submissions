class Solution {
public:
int longestConsecutive(std::vector<int> &nums)
{

    if (nums.empty())
    {
        return {};
    }

    std::sort(nums.begin(), nums.end());

    int count = 1;
    int max = 1;
    for (size_t i = 0; i < nums.size() - 1; i++)
    {

        if (nums[i] == nums[i + 1])
        {
            continue;
        }

        if (nums[i] + 1 == nums[i + 1])
            count++;
        else
        {

            count = 1;
        }
        if (count > max)
            max = count;
    }

    return max;
}


//bad try, coz of sorting
};
