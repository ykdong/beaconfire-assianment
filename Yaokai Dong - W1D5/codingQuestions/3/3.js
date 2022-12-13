// get user input
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(e) {
  e.preventDefault();
  // remove previous result
  let previousResult = document.getElementById("result");
  while (previousResult.firstChild) {
    previousResult.removeChild(previousResult.firstChild);
  }

  // store user input
  let userStr = document.getElementById("string").value;
  
  // reset input box
  document.getElementById("string").value = "";

  // get longest substring
  let length = longestSubstring(userStr);

  // display the result dynamically
  let resultEle = document.createElement("h3");
  resultEle.innerHTML = `The longest substring without repeat for "${userStr}" is:`;
  let lengthEle = document.createElement("h3");
  lengthEle.innerHTML = length;
  document.getElementById("result").append(resultEle, lengthEle);
}) 

// helper function for find longest substring
// I - string 
// O - length (longest substring without repeating)
// C - N/A
// E - empty
// time complexity: O(n^2) I am using nested loop here
// space complexty: O(n) 
let longestSubstring = (str) => {
  // for this case the sliding window will be suitable

  // use 2 pointers to slide, and 2 variable to keep track of the length
  let left = 0, right = 0, length = 0, maxLength = 0;

  // use uniqueness of set to keep track of the visited character
  let visited = new Set();

  // iterate over the input string 
  while (right < str.length) {
    // case 1 the current character has NOT visited yet
    if (!visited.has(str[right])) {
      // add current character to the set
      visited.add(str[right]);
      //increment the current length
      length++;
      // update the maxlength
      if (length > maxLength) {
        maxLength = length;
      }
      // move right pointer for next iterate
      right++;

    // case 2 the current character has visited
    } else {
      // keep sliding the left pointer
      while (visited.has(str[right])) {
        visited.delete(str[left])
        left++;
        length--;
      }
      visited.add(str[right]);
      right++;
      length++;
    }
  }
  
  // return the length and sub variable
  return maxLength;
};
