/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  public int maxDepth(TreeNode root) {

    if (root == null) {
      return 0;
    }

    int lvl = 0;
    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root);

    while (!q.isEmpty()) {
      int lvlSize = q.size();

      for (int i = 0; i < lvlSize; i++) {
        TreeNode node = q.poll();

        if (node.left != null) {
          q.offer(node.left);
        }
        if (node.right != null) {
          q.offer(node.right);
        }

      }

      lvl++;

    }
    return lvl;
  }
}