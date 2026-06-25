class Solution {
public:



std::vector<int> productExceptSelf(const std::vector<int> &nums)
{

    std::vector<int> res;
    const int SIZE = nums.size();
    res.reserve(SIZE);

    // calculate the prefix
    int prefix = 1;

    for (size_t i = 0; i < SIZE; i++)
    {
        res.push_back(prefix);
        prefix = prefix * nums[i];
    }

    // calculate the postfix;
    int postfix = 1;
    for (int i = SIZE - 1; i >= 0; i--)
    {

        res[i] = (res[i] * postfix);
        postfix = postfix * nums[i];
    }

    return res;
}


};
