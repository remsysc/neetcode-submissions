class Solution {
public:
   std::vector<std::vector<std::string>> groupAnagrams(std::vector<std::string> &strs)
{

    std::unordered_map<std::string, std::vector<std::string>> map;

    for (const auto &word : strs)
    {
        // fill with 26s 0
        std::vector<int> count(26, 0);

        for (const char &letter : word)
        {
            // ascii magic; counting every letter
            count[letter - 'a']++;
        }

        std::string key{};
        for (int i : count)
        {
            key += "#" + std::to_string(i);
        }

        // key is the combinations of a letter
        map[key].push_back(word);
    }

    std::vector<std::vector<std::string>> result;

    for (const auto &pair : map)
    {
        result.push_back(pair.second);
    }

    return result;
}

};
