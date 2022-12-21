// Driver: Albert, Yaokai
// Navigator: Albert, Yaokai

// Feedback: as before, Albert is really nice and open to different solution and good at logic

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
  // helper function to do binary search
  function binarySearch(numsArr, left, right, t) {
    // determin the middle index       
    let mid = Math.floor( (left+right)/2 );
    if( left > right ) return mid+1;

    // base case: found the targert element
    if( numsArr[mid] === t ) return mid;
    // target element greater than the middle element, keep search second half of the input array
    else if( t > numsArr[mid] ) return binarySearch( numsArr, mid+1, right, t );
    // target element smaller than the middle element, keep search first half of the input array
    else return binarySearch( numsArr, left, mid-1, t );
  };
  return binarySearch(nums, 0, nums.length-1, target);
};