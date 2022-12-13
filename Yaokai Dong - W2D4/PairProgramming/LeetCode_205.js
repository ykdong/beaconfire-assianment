// Driver: Yaokai
// Navigator: Yaokai

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// I - as above @param
// O - as above return
// C - 1 <= s.length <= 5 * 10^4
//   - t.length == s.length
//   - s and t consist of any valid ascii character.
// E - N/A

// Time Complexity: O(n), the map search method will be constant time
// Space Complexity: O(n), we have to store all the characters in maps
 
var isIsomorphic = function(s, t) {
  if (s === t) { return true; };
  // use two maps to map the input string characters to each other
  let sMap = new Map();
  let tMap = new Map();
  
  // loop through the input strings
  for (let i = 0; i < s.length; i++) {
    // if the mapping characters are mismatched, means they are not isomorphic strings
    if(sMap.has(s.charAt(i))) {
      if(sMap.get(s.charAt(i)) != t.charAt(i)) return false;
    }
    if(tMap.has(t.charAt(i))) {
      if(tMap.get(t.charAt(i)) != s.charAt(i)) return false;
    }
    // set the mapping relationship for the current character
    sMap.set(s.charAt(i), t.charAt(i));
    tMap.set(t.charAt(i), s.charAt(i));
  }
  
  return true;
};