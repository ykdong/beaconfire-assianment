/* 
Consider the following code snippet. 
Create a function named add2 that does the exact same thing but can be invoked in this way: add2(num1)(num2)(num3) 

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
*/
// refactor
// 1 using "function" key word 
function add2(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    }
  }
}
// console.log(add2(1)(2)(3));

// 2 using arrow function
const add2 = (num1) => (num2) => (num3) => num1 + num2 + num3;
// console.log(add2(1)(2)(3));