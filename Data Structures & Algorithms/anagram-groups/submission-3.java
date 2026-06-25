class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

    Map<String, List<String>> map = new HashMap<>();

    for (String word : strs) {

      int [] count = new int[26];

      for (Character letter: word.toCharArray()) {

        count[letter - 'a']++;
        
      }

      String key = Arrays.toString(count);

      map.putIfAbsent(key, new ArrayList<>());
      map.get(key).add(word);

      
    }

    return new ArrayList<>(map.values());
        
    }
}