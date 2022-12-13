// Driver: Aiden
// Navigator: Yaokai

// Feekback: Aiden is really good at logic

// Pseudocode
/**
 * Input: number
 * Output: boolean
 *
 * if n is negative or 0, return false;
 *
 * if it is 1, return true.
 *
 * loop until n > 1:
 *      divide n by 2 if it has 2 as a divider
 *      divide n by 3 if it has 3 as a divider
 *      divide n by 5 if it has 5 as a divider
 *      if it doesn't have either 2, 3, 5 as divider, return false
 *
 * return true
 */
// Solution (Driver only)
var isUgly = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  while (n > 1) {
      if (n % 2 === 0) n /= 2
      else if (n % 3 === 0) n /= 3
      else if (n % 5 === 0) n /= 5
      else return false
  }
  return true
};
// Time: O(n), Explanation: n is the number n
// Space: O(1), Explanation: we do not store any extra variables.