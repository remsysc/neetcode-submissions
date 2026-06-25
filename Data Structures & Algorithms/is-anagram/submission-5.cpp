class Solution {
public:
    bool isAnagram(string s, string t) {

        std::unordered_map<char,int> map_s;
        std::unordered_map<char, int> map_t;

        // saved every char to map and increment each found char..

        for(auto i : s){

            map_s[i]++;

        }

        for(auto i : t){

            map_t[i]++;

        }

        if(map_s == map_t)
            return true;

           
         return false;


    }
};
