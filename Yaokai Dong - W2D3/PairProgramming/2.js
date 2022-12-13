// Driver: Yaokai
// Navigator: Nick

// Feedback: Nick is really good at logic and knows what to do. And nice to working with

// I - nubmer
// O - number
// C - 1 <= n <= 45
// E - N/A

// Time complexity: O(n)
// Space Complexity: O(n)

var climbStairs = function(n) {
   // initialize a new array to store the result for 1 to n 
   let result = [];
   
   // iterate from 1 to n
   for (let i = 1; i <= n; i++) {
       // if i = 1 || i = 2 
       if (i === 1 || i === 2) {
          // result[i - 1] = i
          result[i - 1] = i;
       // else 
       } else {
          // result[i - 1] = result[i - 2] + result[i - 3]
          result[i - 1] = result[i - 2] + result[i - 3];
       }
   }
   // return result[result.length - 1]
   return result[result.length - 1];
};