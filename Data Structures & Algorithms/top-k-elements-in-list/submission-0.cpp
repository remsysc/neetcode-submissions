class Solution {
public:
    std::vector<int> topKFrequent(std::vector<int> &nums, int k)
{
    std::unordered_map<int, int> map;
    std::vector<std::vector<int>> freq(nums.size() + 1);

    for (const auto &i : nums)
    {

        map[i]++;
    }

    for (const auto &i : map)
        freq[i.second].push_back(i.first);

    std::vector<int> res;

    for (int i = freq.size() -1 ; i > 0; i--)
    {

        for (const auto &n : freq[i])
        {
            res.push_back(n);

            if (res.size() == static_cast<size_t>(k))
                return res;
        }
    }

    return {};
}

};
