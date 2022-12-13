// Driver: Yaokai
// Navigator: Yaokai

// Feedback: In my mind, this guy is good. hah

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// I - as above @param
// O - as above return
// C - The number of nodes in the list is the range [0, 5000]
//   - -5000 <= Node.val <= 5000
// E - N/A

// Time Complexity: O(n) traverse over each and every node in the input list
// Space Conplexity: O(n) need to store each and every node for the reversed list

var reverseList = function(head) {
  // create a new list head to hold the reversed list
  // in order to avoid creating unexpected Node with value 0, will set the head to null
  let newList = null;

  // traverse over the input list
  while (head) {
    // create new Head Node for the reversed list 
    let curHead = new ListNode(head.val, newList);
    // update the head pointer
    newList = curHead;
    // move to next node for next itreation
    head = head.next;
  }
  // return the reversed list
  return newList;

  //Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
  // // second solution: cursively reverse the input list
  // let listInput = head;
  // let calculateLength = head;
  // // get the input list length
  // let listLength = 0;
  // while (calculateLength) {
  //     listLength++;
  //     calculateLength = calculateLength.next;
  // }
  
  // // implement a helper function to reverse the input list
  // function helperFunction(theHead, length) {
  //     // base case: the list has only one node
  //     if (!theHead) {
  //         return null;
  //     }
  //     if (length === 1) {
  //         return new ListNode(theHead.val);
  //     }
      
  //     // recursive case: the list has more than one node
  //     let reversedList = helperFunction(theHead.next, length - 1);

  //     // append the head node to the back of the reversed list
  //     let traverse = reversedList;
  //     while (traverse.next) {
  //         traverse = traverse.next;
  //     }
  //     traverse.next = new ListNode(theHead.val);
  
  //     // return the list;
  //     return reversedList;
  // }
  // return helperFunction(listInput, listLength); 
};