"use strict";
/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
//Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function deleteDuplicates(head) {
    // create 'tail' to hold the new list tail
    let tail = new ListNode();
    // create 'newHead' to hold the new list head
    let newHead = tail;
    // create a 'set' to hold the unique value for input list
    let set = new Set();
    // loop through the input list
    while (head) {
        // if the current node value is not in the 'set'
        // means it's not duplicate value
        if (!set.has(head.val)) {
            // add the value into 'set'
            set.add(head.val);
            // create new node with current value, add to the list tail
            tail.next = new ListNode(head.val, null);
            // update the list tail
            tail = tail.next;
        }
        // move to next node
        head = head.next;
    }
    // return the list 'NewHead.next'
    // the head is created with null and null, next node is actual start of the list
    return newHead.next;
}
;
//# sourceMappingURL=83_Remove_Duplicates_from_Sorted_List.js.map