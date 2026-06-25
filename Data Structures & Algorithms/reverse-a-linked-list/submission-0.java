/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */



class Solution {
  public ListNode reverseList(ListNode head) {

    // traverse each node and change the point it backwards
    //
    //

    ListNode prev = null;
    ListNode curr = head;

    while (curr != null) {
      // save the next pointer
      // point current.next to prev (reversal process)
      // move / update the prev to current
      // copy temp to curr
      //
      ListNode tmp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tmp;

    }

    return prev;

  }

}