class Solution {
    public int removeDuplicates(int[] nums) {
         
    if(nums == null || nums.length == 0)
    return 0;

    Set<Integer> seen = new HashSet<>();

    int slow = 0;
    for(int fast = 0; fast < nums.length;fast++){
        
      //not yet seen
      if(!seen.contains(nums[fast])){
        seen.add(nums[fast]);
        nums[slow] = nums[fast];
        slow++;
      }

    }

    return slow;


    }
}