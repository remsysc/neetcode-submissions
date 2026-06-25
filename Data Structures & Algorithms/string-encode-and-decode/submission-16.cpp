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
    size_t i = 0;
    const size_t SIZE = s.size();

    while (i < SIZE)
    {

        // we want to reach the the delimiter ASAP
        size_t delimeter_pos = s.find('#', i);  // finds the '#' at specified pos. (i)
        if (delimeter_pos == std::string::npos) // no more available we break
            break;

        // to get the length of a word
        int length = std::stoi(s.substr(i, delimeter_pos - i));
        // j + 1 to get to the starting index of a word
        std::string tmp = s.substr(delimeter_pos + 1, length);
        decoded_message.push_back(tmp);
        // put the i to the next size of a word
        i = length + delimeter_pos + 1;
    }

    return decoded_message;
}

};
