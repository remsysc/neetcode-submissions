class Solution {
public:

   std::string encode(std::vector<std::string> &strs)
{

    std::string res;
    for (const auto &word : strs)
    {

        res = res + '\0' + word;
    }

    return res;
}

std::vector<std::string> decode(std::string &s)
{

    std::vector<std::string> vec(0);
    int const SIZE = s.size();
    int flag = -1;

    for (int i = 0; i < SIZE; i++)
    {

        if (s[i] != '\0')
        {
            vec[flag] += s[i];
        }
        else
        {
            flag++;
            vec.push_back(std::string());
        }
    }

   
    return vec;
}
};
