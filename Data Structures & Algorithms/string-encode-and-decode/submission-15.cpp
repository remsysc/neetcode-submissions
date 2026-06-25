class Solution {
public:

std::string encode(std::vector<std::string> &strs)
{

    std::string encoded_message{};

    for (const auto &word : strs)
    {
        encoded_message += std::to_string(word.size()) + '#' + word;
    }
    std::cout << encoded_message << '\n';
    return encoded_message;
}

std::vector<std::string> decode(const std::string &s)
{
    std::vector<std::string> decoded_message{};
    int i = 0;
    const int SIZE = s.size();

    while (i < SIZE)
    {

        int j = i;
        // we want to reach the the delimiter ASAP
        while (s[j] != '#')
        {
            j++;
        }
        // to get the length of a word
        int length = std::stoi(s.substr(i, j - i));
        // j + 1 to get to the starting index of a word
        std::string tmp = s.substr(j + 1, length);
        decoded_message.push_back(tmp);
        // put the i to the next size of a word
        i = length + j + 1;
    }

    return decoded_message;
}
};
