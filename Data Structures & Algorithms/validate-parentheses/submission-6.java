class Solution {
     public boolean isValid(String s) {

    Stack<Character> stack = new Stack<>();
    Map<Character, Character> map = new HashMap<>();
    // key , value pair
    map.put(']', '[');
    map.put(')', '(');
    map.put('}', '{');

    for (Character c : s.toCharArray()) {

      if (map.containsKey(c)) {
        // compare opening paren to stack(opening parenthesis)
        if (!stack.isEmpty() && stack.peek() == map.get(c)) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        // only pushing the open parenthesis
        stack.push(c);
      }
    }

    return stack.isEmpty();

  }





}
