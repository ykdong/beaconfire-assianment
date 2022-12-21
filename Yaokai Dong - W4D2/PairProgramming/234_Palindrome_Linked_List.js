// Driver: Yaokai
// Navigator: Albert

// Feedback: as before, Albert is really nice and open to different solution and good at logic

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // Run time complexity: O(n)
  // Space complexity: O(n)

  // create an array to store all the node values
  const array = [];
  // iterate over the input list, store all the values into 'array'
  while (head) {
      array.push(head.val);
      head = head.next;
  }
  // loop through half of the array
      // if it's not palindrome, return false directly
  for (let i = 0; i < (array.length/2); i++) {
      if(array[i] !== array[array.length - 1 - i]) return false;
  }
  // passes all the tests, it is a palindrome
  return true;

};