class Solution {
    public boolean isAnagram(String s, String t) {


        char tempArray[] = s.toCharArray();
        Arrays.sort(tempArray);
        s = new String(tempArray);

        tempArray = t.toCharArray();
        Arrays.sort(tempArray);
        t = new String(tempArray);

        if(s.equals(t))
            return true;

        return false;



    }
}
