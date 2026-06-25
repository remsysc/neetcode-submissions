class Solution {
public:
  std::vector<int> topKFrequent(std::vector<int> &nums, int k)
{

    std::unordered_map<int, int> freq;

    // tracks the frequency of a number
    for (const auto &i : nums)
    {
        //[number, frequency]
        freq[i]++;
    }

    std::vector<std::vector<int>> buckets(nums.size() + 1); // since we wont use index 0 ; we have to add 1 space for all unique numbers
    for (const auto &[number, frequency] : freq)
    {
        buckets[frequency].push_back(number);
    }

    std::vector<int> result;
    result.reserve(k);
    // starts from highest freq. to low
    for (int i = buckets.size() - 1; i > 0; i--)
    {
        // push that numbers to result
        for (const auto &n : buckets[i])
        {
            result.push_back(n);
            // return if true
            if (static_cast<int>(result.size()) == k)
                return result;
        }
    }

    return result;
}


};
