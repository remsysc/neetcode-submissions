class Solution {
   public void reverseString(char[] s) {

    List<Character> list = new ArrayList<>();
    for (char c : s) {
      list.add(c);
    }

    Collections.reverse(list);
    IntStream.range(0, s.length)
        .forEach(i -> s[i] = list.get(i));

  }

}