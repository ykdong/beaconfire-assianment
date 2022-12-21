// Driver: Albert
// Navigator: Yaokai

// Feedback: as before, Albert is really nice and open to different solution and good at logic

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // usring a map to store the element/index relationship
  const map = {};
  // loop through the input array 'nums'
  for (let i = 0; i < nums.length; i++) {
      // store the current element
      const num = nums[i];
      // check the element/index relationship in the map
      // if the the current value have key/value pair in the map and the indexs are with k step
      // means we found the duplicate element, return true directly
      if ((map[num] !== undefined) && (i - map[num] <= k)) return true;

      // otherwise, we update the element/index relationship in the map
      map[num] = i;
  }
  // return false
  return false;
};