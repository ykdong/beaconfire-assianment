// // 1. What is the output of this code?
// var dataObj = {
//   data: "xyz",
//   functionA: function () {
//     var self = this;
//     console.log("outer function: this.data = " + this.data);
//     console.log("outer function: self.data = " + self.data);
//     (function () {
//       console.log("inner function: this.data = " + this.data);
//       console.log("inner function: self.data = " + self.data);
//     })();
//   }
// };
// dataObj.functionA();

/* 
output:
1. outer function: this.data = xyz
2. outer function: self.data = xyz
3. inner function: this.data = undefined
4. inner function: self.data = xyz

1. for the first output, because the "this" is bounded to "dataObj". This is refer to "dataObj"
So this.data now is dataObj.data

2. Based on the caller object, the "this" is bounded to "dataObj". And the reference is assigned to "this"
So self.data now is dataObj.data

3. The inner function is using IIFE, the "this" is not bounded to certain object. So "this" will bind to "window" object
So this.data now is window.data, which is undefined. Becase we didn't create any "data" variable in global scope

4. When outer function declared the "self" variable is using "var", which make the "self" variable as a global variable
After "self" has assigned the reference to "dataObj" object, "self" can access the properties of "dataObj"
So self.data now is dataObj.data
*/

// // 2. What is the output of this code and why?
// var x = 1;
// var fn = function () {
//   console.log(x);
//   var x = 2;
// };
// fn();
/* 
output: undefined

This result is based on hoisting
Because the fn has redeclared the "x" after using the variable
When JS executes the "console.log(x)", the "x" undefined at that time
The JS read the code from left to right, top to bottom
It actually as follow: 
var x;
cosole.log(x)
x = 2;
*/

// // 3. What is the output of this code and why?
// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();

/* 
output: 3
The JS executes the code as follow:
var b; 
function outer assign with f();
invoke the outer(); // jump to the 'outer' function definition
  // another call stack layer
  var b assign with value 1;
  function inner assign with f();
  invoke inner(); // jump to the 'inner' function definition
    // another call stack layer
    var b assign with value 2;
    execute b++, already have a global value 2
    finish execution. assign with b with new value 3
    execute another declaration statement, assign b with value 3
    execute console.log with variable b
    finish inner funtion
  finish outer function
finish the global execution


//////////////////// answer correction after clarification ////////////////////

var b; 
function outer assign with f();
invoke the outer(); // jump to the 'outer' function definition
  // another call stack layer
  var b;
  function inner assign with f();
  invoke inner(); // jump to the 'inner' function definition
    // another call stack layer
    var b;
    execute b++, in this line the JS will execute undefined++;
    execute another declaration statement, assign b with value 3
    execute console.log with variable b
    finish inner funtion
  finish outer function
finish the global execution

//////////////////// answer correction after clarification ////////////////////
*/

// // 4. What is the output of this code and why?
// (function (x) {
//   return (function (y) {
//     console.log(y);
//   })(2);
// })(1);
/* 
output: 2
It is nested IIFE.
1 calling outer IIFE with argument x with value 1
2 calling inner IIFE with argument y with value 2
3 console.log the argument y with value 2
*/

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);
/* 
output: 1
This is nested IIFE and closure
The inner IIFE have access to the outer function and its variable 
In this case, x with value 1
*/

// // 5. What is the output of this code and why?
// var user = {
//   _name: 'Username1',
//   printName: function () {
//     console.log(this._name);
//   }
// };
// var printName = user.printName;
// printName();
// user.printName();
/* 
output: printName() => undefined | Username1 => user.printName()
First function invocation has bound to nothing, will result in bound to global object
Second funtion invocation has bound to "user" object
*/

// var user2 = {
//   _name: 'Username2',
//   printName2: () => {
//     console.log(this._name);
//   }
// };
// var printName2 = user2.printName2;
// printName2();
// user2.printName2();
/* 
output: printName2() => undefined | user2.printName2() => undefined
First invocation, is bound to nothing. Will result in bound with global object
Second invocation, if the function is defined in as object method. 'this' will bound to glocal object
*/