class Solution {
public:


 std::vector<int> twoSum(std::vector<int>& numbers, int target) {
        
        const int kNumbersSize = numbers.size();
        int left = 0;
        int right = kNumbersSize - 1;

        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {

                return {left + 1, right + 1};
            }

            else if (sum < target)
                left++;
            else {
                right--;
            }
        }

        return {};
    }
};
