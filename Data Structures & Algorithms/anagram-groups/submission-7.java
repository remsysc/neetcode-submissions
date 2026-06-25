
class Solution {
  public List<List<String>> groupAnagrams(String[] strs) {

    Map<String, List<String>> anagrams = new HashMap<>();

    for (var word : strs) {
      int count[] = new int[26];

      for (var letter : word.toCharArray()) {
        count[letter - 'a']++;
      }

      String key = Arrays.toString(count);

      anagrams.putIfAbsent(key, new ArrayList<>());
      anagrams.get(key).add(word);

    }

    return new ArrayList<>(anagrams.values());

  }
}