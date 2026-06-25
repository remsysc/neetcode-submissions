class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        
        std::unordered_map<int,int> freq;

        //tracks the freq.
        for(const auto &i: nums)
             freq[i]++;
        
        // create a bucket + 1; 
        std::vector<std::vector<int>> buckets(nums.size()+1);
        for(const auto &[number, frequency]: freq)
            buckets[frequency].push_back(number);
        
        std::vector<int> result;
        result.reserve(k);

        for(int i = buckets.size() - 1 ; i > 0; i--){
            
            for(const auto &n : buckets[i]){
                result.push_back(n);

                if(result.size()==k)
                    return result;
            }
        }

        return result;

    }
};
