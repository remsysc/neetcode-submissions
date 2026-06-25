class Solution {
public:

std::vector<int> productExceptSelf(std::vector<int> &nums)
{

    int prefix = 1;
    int postfix = 1;
    int const SIZE = nums.size();

    std::vector<int> res(SIZE, 1);

    // prefix iteration
    for (int i = 0; i < SIZE; i++)
    {

        res[i] = prefix;
        prefix = prefix * nums[i];
    }

    // postfix iteration

    for (int i = SIZE - 1; i >= 0; i--)
    {

        res[i] = res[i] * postfix;
        postfix = postfix * nums[i];
    }

    return res;
}


};
