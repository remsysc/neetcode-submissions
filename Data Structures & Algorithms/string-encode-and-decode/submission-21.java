
class Solution {

  public String encode(List<String> strs) {

    StringBuilder str = new StringBuilder();
    for (String word : strs) {
      int size = word.length();
      str.append(size).append('#').append(word);

    }

    return str.toString();
  }

  public List<String> decode(String str) {

    int size = str.length();
    List<String> res = new ArrayList<>();

    int i = 0;

    while (i < size) {
      int delimeter = str.indexOf('#', i);
      if (delimeter == -1)
        break;
      // gets the length of the word
      // by convertign the char to int, any not numbers gets ignored till delimeter
      int length = Integer.parseInt(str.substring(i, delimeter));
      // get the substring starts at delimeter + 1 (start at first letter), it ends at
      // length (len of word) + ( delimeter + 1);
      res.add(str.substring(delimeter + 1, length + delimeter + 1));
      // update the starting index;
      i = length + delimeter + 1;
    }

    return res;

  }

  public static void main(String[] args) {
    String str = "luna";

    System.out.println(str.substring(0, 3));
  }
}