### 1. What are the different type of scopes?
- Block: can access a variable limited to within a non-function body("{}")
- Function: can access a variable limited to within a function body
- Global: can access all code. In JS it refers to "window" object 

### 2. What is hoisting?
Hoisting is JS default behavior of moving declarations to the top
Means if not in strict mode, a variable can be declared after it has been used

### 3. Explain the differences between var, let & const
"var" is in global scope. "let" & "const" are in block scope
"var" can redeclare. "let" & "const" cannot
"var" & "let" doesn't need initial value. "const" does need
"var" & "let" can reassign, "const" cannot

### 4. What is an execution context? How does it relate to the call stack?
Execution Context is a container for all the information needed to execute some code
- By default, one global EC ("window") for the top-level code
- New EC for each function invocation

It has 2 phases:
- Creation: Store all necessary references to variables and function in memory
- Execution: Assign values to variables and invoke functions

A stack that stores all EC created when code is executed
And for each function invocation, will push its EC to the top of the stack

### 5. What is the scope chain? How does lexical scoping work?
In JS each function has its own scope. Any function defined within another function has a local scope 
which is linked to the outer function, this link is called scope chain

Lexical Scoping: Code block inside a funtion may access variables defined outside, but not the reverse

### 6. What is a closure? Can you provide an example use-case in words?
Closure means an inner function with references to outer function scope and its variables
Even after the outer function has returned. This concept is based on execution context

### 7. What is an IIFE? When would you use it?
IIFE stands for Immediately-Invoked Function Expression. A function that is invoked when it is defined
We will use it to avoid polluting the global object. Or do some "initiation code" on the top-level once, and clean up variables

### 11. What does ‘this’ refer to in the cases that were discussed in lecture?
In lecture, "this" refer to the "user" object

### 13. What are the differences between call, apply & bind?
call(): 
- Accepts "this" argument and series of arguments
- Execus funtion with "this" argument
- return the execution result
apply():
- Accepts "this" argument and array of arguments
- Execus funtion with "this" argument
- return the execution result
bind():
- Accepts "this" argument and series of arguments
- Copy the function and bind the function with "this" argument
- return the newly-bound function

### 14. Can you name the new ES6 features?
"let", "const" key word
Arrow function
Template string literals(``)
Map & Set
Array & Object Destructuring
Spread & Rest Operator(...)
Default function parameter
Generator
Classes
Promise, Async/Await
Modules

### 15. What is ‘use strict’? What are the major effects that it has?
An expression that makes JS execute in strict mode, mostly for writing secure code
Used at the very beginning of the script for globally scoped strict mode

In strict mode: 
- cannot use undeclared variables, objects, or functions
- cannot delete variables or objects
- cannot have duplicate function argument names

### 16. What is currying?
Break down a function that takes multiple arguments into a sequence of functions that each take a single argument
Features:
- Each nested function is a closure
- Function Composition

### 17. What are ES6 modules? Why are they useful? How do we make these modules available in other JS files?
Next Lecture

### 18. What is Object-Oriented Programming (OOP)?
OOP is a programming paradigm based on the concept of classes, objects, abstraction, encapsulation, inheritance and polymorphism
Abstraction focuses on the outside view of an object(the interface), we trate it as an blackbox
Encasulation(information hiding) disallowing access to or knowledge of internal structures of an implementation

### 19. What is prototype-based OOP in JS?
Prototype-based OOP means a group of properties and methods that every object "inherits" from

### 20. What is the prototype chain?
The cycle of looking for an object's property on the current object, then its prototype, and its prototype's prototype, and so on
until finding the property or reaching null. This concept is based on inheritance

### 21. How do you implement inheritance in JavaScript before ES6 and with ES6?
Inheritance means an object/class has the properties of another object or class while defining its own properties

Implement before ES6: Contructor Functions 
Syntax:
Create Parent Object
Create Child Object
In side child object we execute the parent constructor: ParentObject.call(this, argument1, argument2, ...);
Inheritant the parent prototype: ChildObject.prototype = Object.create(ParentObject.prototype)
Set the correct constructor for child object: ChildObject.prototype.constructor = ChildObject

Implement with ES6: Classes
Syntax:
extends ParentClass
super(with necessary arguments) 
