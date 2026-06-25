class Solution {
  public List<List<String>> groupAnagrams(String[] strs) {

    // they are anagram if they all have the same key,
    // key can be create by getting ascii, if we count every letter we effectively
    // create a key for anagram

    Map<String, List<String>> anagrams = new HashMap<>();

    for (String word : strs) {

      int count[] = new int[26];
      for (Character letter : word.toCharArray()) {
        count[letter - 'a']++;
      }
      String key = Arrays.toString(count);

      anagrams.putIfAbsent(key, new ArrayList<>());
      anagrams.get(key).add(word);

    }

    return new ArrayList<>(anagrams.values());

  }
}