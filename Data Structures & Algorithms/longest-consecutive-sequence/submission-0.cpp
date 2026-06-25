class Solution {
public:
    int longestConsecutive(std::vector<int> &nums)
{

    std::set<int> map(nums.begin(), nums.end());
    int maxLength = 0;

    for (const int &num : map)
    {

        if (map.find(num - 1) == map.end())
        {

            int current_num = num;
            int current_length = 1;

            while (map.find(current_num + 1) != map.end())
            {
                current_num++;
                current_length++;
            }
            maxLength = std::max(maxLength, current_length);
        }
    }

    return maxLength;
}
};
