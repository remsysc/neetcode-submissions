class Solution {
    public boolean hasDuplicate(int[] nums) {
        
    Arrays.sort(nums);

    final int SIZE = nums.length;

    if(SIZE <= 1)
        return false;


    for(int i = 0 ; i < SIZE - 1 ; i++){

        if(nums[i] == nums[i + 1])
            return true;

    }
        

    return false;  

    }
    
}
