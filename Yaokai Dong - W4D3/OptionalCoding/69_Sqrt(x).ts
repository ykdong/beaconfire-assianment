/**
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */
function mySqrt(x: number): number {
  // declare a base number
  let i: number = 1;
  // set a loop flag
  let found: boolean = false;
  while(!found) {
    // if x is a perfect square, we could find the squre root
    if (i * i === x) {
      found = true;
      break;
    }
    // x is not a perfect squre, we would output its nearest squre root integer
    else if (i * i > x) {
      found = true;
      i -= 1;
      break;
    }
    i++;
  };
  // should have a explicit return statement for return type checking
  return i;
};