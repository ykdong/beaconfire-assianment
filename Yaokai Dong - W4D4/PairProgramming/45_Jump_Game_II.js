// Driver: Yaokai
// Navigator: Harry

// Feedback: Harry is really good at logic

/**
 * @param {number[]} nums
 * @return {number}
 */
// Space Complexity: O(1)
// Run time Complexity: O(nlogn)
var jump = function(nums) {
  // start from the first
  // make one move 
    // compare the current value with the next step
  let i = 0, result = 0, currValue = 0;
  while(currValue < nums.length - 1) {
    // update the 'result' for next iteration
    result += 1;
    let prevValue = currValue;
    while(i <= prevValue) {
      currValue = Math.max(currValue, i + nums[i]);
      i += 1;
    }
  }
  return result;
};