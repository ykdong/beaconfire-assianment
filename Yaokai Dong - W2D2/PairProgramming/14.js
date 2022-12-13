/* 
Driver: Yaokai 
Navigator: Leo

Feedback: 
Leo is friendly and clear what to do, and open to different idea
*/

// I - array of string
// O - string
// C - 1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.
// E - [""]

// Time Complexity: O(n^m)
// Space Complexity: O(1)

let longestCommonPrefix = (strArr) => {
  // use first element as reference
  const firstWord = strArr[0];

  // keep track of the result
  let result = "";

  // loop through the first string (outer loop)
  for (let i = 0; i < firstWord.length; i++) {
    // loop through every letter for all the array items (nested loop)
    for (let j = 1; j < strArr.length; j++) {
      // i - current letter of the first word
      // j - current word (except the first word)
      // check the jth index letter

      if (strArr[0][i] !== strArr[j][i]) {
      // case 1 if the letter are not equal
        // stop the loop
        return result;

      // case 2 else if the length of the first element if diffrent of the length of the current element
      } else if ((i >= (firstWord.length) || (i > strArr[j].length)) && (strArr[0].length !== strArr[j].length)) {
        // stop the loop
        return result;
      } 
    }
    result += strArr[0][i];
  }
  return result;
};

// let a = ["dog","racecar","car"];
// console.log(longestCommonPrefix(a));