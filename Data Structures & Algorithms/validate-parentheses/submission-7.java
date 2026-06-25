class Solution {
     
  public boolean isValid(String s) {

    Stack<Character> stack = new Stack<>();
    Map<Character, Character> map = new HashMap<>();
    // key , value pair
    map.put(']', '[');
    map.put(')', '(');
    map.put('}', '{');

    for (Character c : s.toCharArray()) {

      if (!map.containsKey(c)) {
        stack.push(c);
      } else {
        if (stack.isEmpty() || stack.peek() != map.get(c)) {
          return false;
        } else {
          stack.pop();
        }
      }

    }
    return stack.isEmpty();

  }



}
