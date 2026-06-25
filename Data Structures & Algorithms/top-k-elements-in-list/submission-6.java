class Solution {
  public int[] topKFrequent(int[] nums, int k) {

    Map<Integer, Integer> count = new HashMap<>();
    List<Integer>[] freq = new List[nums.length + 1];
    Arrays.setAll(freq, i -> new ArrayList<>());

    // n key, # occurence is the value
    for (int n : nums) {
      count.put(n, count.getOrDefault(n, 0) + 1);
    }

    // put in in the freq bucket
    //
    for (Map.Entry<Integer, Integer> entry : count.entrySet()) { // entrySet() store the duplicates together
      // # occurence || number
      freq[entry.getValue()].add(entry.getKey());

    }

    int index = 0;
    int[] res = new int[k];

    for (int i = freq.length - 1; i > 0 && index < k; i--) {

      for (int n : freq[i]) {
        res[index++] = n;

        if (index == k)
          break;

      }

    }

    return res;

  }
}