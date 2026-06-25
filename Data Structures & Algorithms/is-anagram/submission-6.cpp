class Solution {
public:
    bool isAnagram(string s, string t) {

        
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

   return (s_count == t_count) ? true : false;

   
}
};
