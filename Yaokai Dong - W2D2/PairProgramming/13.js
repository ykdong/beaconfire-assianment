/* 
Driver: Leo
Navigator: Yaokai

Feedback: 
Leo is friendly and clear what to do, and open to different idea
*/


/**
 * @param {string} s
 * @return {number}
 */
// I - string
// O - number
// C - n/a
// E - n/a

// Time Complexity: O(n)
// Space Complecity: O(1)

 var romanToInt = function(s) {
  // store the reference table takes up constant space in memory
  const table = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };

  // create a variable to store the result called "sum"
  let sum = 0;

  // loop through the input string
  for (let i = 0; i < s.length; i++) {
    // if the current char is small than the next char
    // means we have to subtract it from the next char
    if (table[s[i]] < table[s[i + 1]]) {
      // store the result 
      sum += (table[s[i + 1]] - table[s[i]]);
      // skip one iteration
      i++;
    } else {
      // normal case, add to the result
      sum += table[s[i]];
    }
  }
  // return the result
  return sum;
};