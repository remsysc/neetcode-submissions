class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
      
    std::unordered_map<std::string, int> map;
    std::vector<std::vector<std::string>> grouped;

    const int SIZE = strs.size();
    int flag = 0;

    for (int i = 0; i < SIZE; i++)
    {

        std::string tmp = strs[i];
        std::sort(tmp.begin(), tmp.end());

        if (map.find(tmp) == map.end())
        {
            map[tmp] = flag;
            grouped.push_back(std::vector<std::string>());
            grouped[flag].push_back(strs[i]);
            flag++;
        }
        else
        {
            grouped[map[tmp]].push_back(strs[i]);
        }
    }

    return grouped;  
    }
};
