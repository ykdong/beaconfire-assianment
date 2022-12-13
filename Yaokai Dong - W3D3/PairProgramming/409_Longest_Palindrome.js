// Driver: Yaokai
// Navigator: Albert

// Feedback: Albert is really nice, he always open to different opinion and willing to try 
function longestPalindrome(s) {
  /*
      iterate through string
          use map to store all characters
      
      iterate through the map
          add even numers to the output answer
          if there is an odd number left, then we would add 1
  */
  if( s.length < 2 ) return s.length; // O(1)

  let result = 0; // O(1)
  const map = {}; // O(1)

  for( let i=0; i<s.length; i++ ) { // O(n)
      if( map[s[i]] ) map[s[i]]++;
      else map[s[i]] = 1;
  }

  for( let char in map ) { // O(n) 
      if( map[char] % 2 === 0 ) {
          result += map[char];
      } else if( map[char]-1  ) {
          result += map[char]-1
          map[char] = 1;
      }
  }
  
  
  for( let char in map ) { // O(n)
      if( map[char] % 2 === 1 ) {
          result++;
          break;
      }
  }
  
  // runtime: O(n)
  // space: O(n)
  return result;
}