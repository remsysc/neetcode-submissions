class Solution {
public:

std::string encode(std::vector<std::string> &str){

    //add a number and hashtag in front word
    // number is the number of char in that word
    //
    // return
    //
    std::string res{};
    size_t kSize = str.size();

    for(const auto & word : str){
        res.append( std::to_string(word.size()) + "#"   + word);
    }


    return res;
}
    std::vector<std::string> decode(const std::string &str) {
    size_t kSize = str.size();
    std::vector<std::string> res{};

    size_t i = 0;

    while(i < kSize){
        size_t delimeter = str.find('#', i);
        if(delimeter == std::string::npos)
            break;
        int length =  std::stoi(str.substr(i, delimeter - i));
        res.push_back(str.substr(delimeter + 1, length));
        i = length +  delimeter +1;
    }

    return res;

    }

};
