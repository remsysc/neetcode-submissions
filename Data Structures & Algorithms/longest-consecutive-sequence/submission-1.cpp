class Solution {
public:
    int longestConsecutive(std::vector<int> &nums)
{

    std::unordered_set<int> map(nums.begin(), nums.end());
    int maxLength = 0;

    for (const int &num : map)
    {

        if (map.find(num - 1) == map.end())
        {
            int current_length = 1;

            while (map.find(num + current_length) != map.end())
            {
                current_length++;
            }
            maxLength = std::max(maxLength, current_length);
        }
    }

    return maxLength;
}

};
