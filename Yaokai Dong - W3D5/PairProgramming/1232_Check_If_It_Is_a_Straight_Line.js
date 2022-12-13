// Driver: Yaokai
// Navigator: Aiden

// Feekback: Aiden is really good at logic

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

 // Time Complexity: O(n)
 // Space Complexity: O(1)
 var checkStraightLine = function(coordinates) {
  // helper function to determine the parameters
  function parameters(arrayOfTwoCoor) { // Time Complexity: O(1)
      const [[x1,y1], [x2,y2]] = arrayOfTwoCoor;
      let m, b;
      if (x2 - x1 === 0) {
          return [x1, undefined]
      }
      m = (y2 - y1)/(x2 - x1);
      b = (y1 - m * x1);
      return [m, b];
  }
  // create a referrence variable to store the parameters to check the
  // x and y relationship for the third element and so on
  // y = x * m + b (straight line equation)
  let [m, b] = parameters([coordinates[0], coordinates[1]]);
  
  // loop from the third coordinates
  for (let i = 2; i < coordinates.length; i++) { // Time Complexity: O(n)
      // if the difference of current coordinates with previous element is not the referrence value
      let curr = coordinates[i];
      if (typeof b === "number") {
          if (curr[1] !== (curr[0] * m + b)) {
              // return false;
              return false;
          }
      } else {
          if (curr[0] !== m) {
              return false;
          }
      }
  }

  // no elements violates the test, return true
  return true;
};
