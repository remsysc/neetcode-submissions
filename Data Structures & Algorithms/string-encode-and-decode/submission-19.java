class Solution {

  public String encode(List<String> strs) {

    String str = "";
    for (String word : strs) {
      int size = word.length();
      str = str.concat(size + "#" + word);

    }

    return str;
  }

  public List<String> decode(String str) {

    int size = str.length();
    List<String> res = new ArrayList<>();

    int i = 0;

    while (i < size) {
      int delimeter = str.indexOf('#', i);
      if (delimeter == -1)
        break;

      int length = Integer.parseInt(str.substring(i, delimeter));
      res.add(str.substring(delimeter + 1, length + delimeter  + 1));
      i = length + delimeter + 1;
    }

    return res;

  }
}