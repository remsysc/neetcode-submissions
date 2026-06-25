class Solution {
public:
  bool isAnagram(std::string s, std::string t)
{

    size_t const SIZE = s.size();
    if (SIZE != t.size())
        return false;

    std::unordered_map<char, int> s_count = {};
    std::unordered_map<char, int> t_count = {};

    for (size_t i = 0; i < SIZE; i++)
    {
        s_count[s[i]]++;
        t_count[t[i]]++;
    }

    for (const auto &i : s_count)
    {

        if (s_count[i.first] != t_count[i.first])
        {
            return false;
        }
    }

    return true;
}
};
