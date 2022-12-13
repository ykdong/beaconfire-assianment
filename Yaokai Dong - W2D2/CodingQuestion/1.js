/* 
for (var i = 1; i <=3; i++) {
  document.getElementById(`btn${i}`).addEventListener('click', function () {
    console.log(`you just clicked #${i} button`);
  })
}
a) What is the console.log output when the user clicks on "Button 3" and why?

The output is: -> you just clicked #4 button

Reason: 
Using "var" key word will set "i" in glocal scope. After the for loop. The value of i is 4
The event handler function has reference to glocal var i (value: 4)

b) How would we fix the issue before ES6? How do we fix it after ES6?
Fix with ES5: We use IIFE to fix
Fix with ES6: We use "let" key word to fix
*/

// original code
for (var i = 1; i <=3; i++) {
  document.getElementById(`btn${i}`).addEventListener('click', function () {
    console.log(`you just clicked #${i} button`);
  })
}
//output:
// you just clicked #4 button
// you just clicked #4 button
// you just clicked #4 button

// ES5 IIFE
for (var i = 1; i <=3; i++) {
  (function (i) {
    document.getElementById(`btn${i}`).addEventListener('click', function () {
      console.log(`you just clicked #${i} button`);
    })
  })(i);
}
// output: 
// you just clicked #3 button
// you just clicked #2 button
// you just clicked #1 button

// ES6 "let" kwyword
for (let i = 1; i <=3; i++) {
  document.getElementById(`btn${i}`).addEventListener('click', function () {
    console.log(`you just clicked #${i} button`);
  })
}
// output: 
// you just clicked #3 button
// you just clicked #2 button
// you just clicked #1 button
