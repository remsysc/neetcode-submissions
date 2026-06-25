class Solution {
public:
bool isAnagram(std::string s, std::string t)
{

    size_t const s_SIZE = s.size();

    if (s_SIZE != t.size())
        return false;

    std::unordered_map<char, int> s_count;
    std::unordered_map<char, int> t_count;

    for (size_t i = 0; i < s_SIZE; i++)
    {
        s_count[s[i]]++;
        t_count[t[i]]++;
    }

    for (auto it = s_count.begin(); it != s_count.end(); ++it)
    {
        if (it->second != t_count[it->first])
            return false;
    }

    return true;
}
};
