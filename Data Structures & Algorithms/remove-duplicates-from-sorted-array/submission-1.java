class Solution {
    public int removeDuplicates(int[] nums) {
      
    if (nums == null || nums.length == 0)
      return 0;

    int slow = 0;
    int size = nums.length;
    for (int fast = 1; fast < size; fast++) {

      if (nums[slow] != nums[fast]) {
        slow++;
        nums[slow] = nums[fast];
        
      }

    }

    return slow + 1;

  
    }
}