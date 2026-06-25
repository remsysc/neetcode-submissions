class Solution {
public:


std::string encode(std::vector<std::string> &strs)
{

    std::string res;
    for (const auto &word : strs)
    {

        res += std::to_string(word.size()) + '#' + word;
    }

    return res;
}

std::vector<std::string> decode(std::string &s)
{

     std::vector<std::string> vec;
    int i = 0;
    int const SIZE = s.size();
    while (i < SIZE)
    {
        int j = i;
        while (s[j] != '#')
        {
            j++;
        }

        // to get the int in the string
        int length = std::stoi(s.substr(i, j - i));

        // starting index to the last index of the word
        std::string tmp = s.substr(j + 1, length);
        // push the word
        vec.push_back(tmp);
        // put the i to the next int;
        i = j + 1 + length;
    }

    return vec;
}

};
