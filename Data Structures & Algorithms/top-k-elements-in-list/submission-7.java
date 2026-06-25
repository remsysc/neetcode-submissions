
class Solution {
  public int[] topKFrequent(int[] nums, int k) {

    Map<Integer, Integer> count = new HashMap<>();
    List<Integer>[] freq = new List[nums.length + 1];
    Arrays.setAll(freq, i -> new ArrayList<>());

    // n# = number of occurence
    // n : #n
    for (var n : nums)
      count.put(n, count.getOrDefault(n, 0) + 1);

    // n# : [n]
    // put count into the freq
    for (Map.Entry<Integer, Integer> entry : count.entrySet()) {
      freq[entry.getValue()].add(entry.getKey());
    }

    int index = 0;
    int[] res = new int[k];
    for (int i = freq.length - 1; i > 0 && index < k; i--) {

      for (var j : freq[i]) {
        if (k == index)
          break;
        res[index++] = j;

      }

    }

    return res;
  }
}