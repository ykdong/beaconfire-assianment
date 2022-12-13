// Driver: Nick
// Navigator: Yaokai

// Feedback: Nick is really good at logic and knows what to do. And nice to working with

// I - array of number
// O - number
// C - 
//    1 <= digits.length <= 100
//    0 <= digits[i] <= 9
//    digits does not contain any leading 0's.
// E - N/A

// Time Complexity: O(1)
// Space Complexity: O(1)

var plusOne = function(digits) {
  // convert input array into string
  let digitsStr = digits.join("");

  // convert number string into number and plus one
  // since the length of nubmer array could reach 100
  // means the number could be really large
  // use the bigint would be suitable
  let num = BigInt(digitsStr) + BigInt(1);

  // convert the number into string and split into array
  let result = num.toString().split("");

  //return the result array
  return result;
};