### 1. What is ECMAScript?
It is a standardized specification for a scripting language, for JavaScript language syntax & semantics

### 2. What is the JavaScript engine?
It is a software program that optimizes and executes JavaScript code
There are 4 major JavaScript engine:
- V8
- SpiderMonkey
- JavaScriptCore
- Chakra

### 3. Explain just-in-time (JIT) compilation. What’s the difference between JIT compilation and interpretation?
JIT compilation is a method that during the source code runtime, convert the entire code into machine code
then execute immediately. Which allows for runtime optimizations

Interpretation is a method that during the source code runtime, the interpreter parses the code and directly executes instructions line by line

The difference between interpretation and JIT compilation, which occurs at runtime, is that the JIT compiler translates source code into native
code(machine languages), whereas an interpreter either runs code directly(if it is already machine language), runs precompiled code, or turns 
code into an intermediate language.

### 4. What are primitive data types in JS?
string / number / boolean / undefined / null / symbol / bigint

### 5. What are reference data types in JS?
object / function / array / etc

### 6. What is type coercion, and how does it differ from type conversion?
Coercion means when a value's data type is implicitly changed to another data type. It happens on operations between values of different data types
Conversion means when a value's data type is explicitly changed to another data type (typecasting) 

### 7. What is dynamic typing?
Dynamic typing means if types are not specified when declaring variables; they are assigned based on the value at runtime.

### 8. What is immutability? What data types are immutable?
Immutability means the structure of data cannot be changed.
String and Number are immutable in JavaScript

### 9. What is the difference between == and ===?
'==' is a comparison operator that converts the operands to the same type before the comparison.
'===' is a strict-equality comparison operator that returns false if the operands are not the same type.
In short, the '==' only check value not type. The '===' check both value and type.

### 10. What are some examples of falsey values in JS?
undefined / null / NaN / 0 / ""(empty string) / false

### 11. How do primitive and reference data types differ in where they’re stored in memory?
Primitive types are fixed size in memory, reference types are dynamic size in memory.
Primitive types are stored on the stack, reference types are stored on the heap.
- ### How does this affect them when they are passed as arguments to a function?
- 1 When assign a primitive value from one variable to another, the JavaScript engine creates a 
- copy of that value and assigns it to the variable. This means that if one variable changes, 
- it'll NOT affect the other
- 2 When assign a reference value from one variable to another, the JavaScript engine creates a
- reference so that both variables refer to the same object on the heap memory. This means that 
- if one variable changes, it'll affect the other

### 12. What are 3 ways to declare functions? What is their syntax?
3 ways to declare a function: 
- Keyword function    => function f1() {};
- Function expression => var f2 = function () {};
- Arrow function      => var f3 = () => {};

### 13. What are 3 ways to iterate an array? What is their syntax?
- for keyword loop => for (let i = 0; i < array.length; i++) {};
- for of keyword loop => for (let item of array) {};
- forEach() method loop => array.forEach();

### 14. What are the major differences between a set and array?
The biggest difference between an Array & Set is that Array can have duplicate values whereas Set can not

### 15. What are the major differences between a map and object?
- A Map is ordered, whereas a object in not ordered
- A Map can use any type of data as key, whereas object can only have number, string or symbol as a key


### 16. What is the DOM?
DOM stands for Document Object Model. Is the data representation of the objects that comprise the structure and content
of a document on the web

### 17. How can you select an HTML element using JS?
Use Query Selector. The Query Selector selects HTML elements using CSS selectors(#, .class, tag)


### 18. What is a DOM event?
DOM Event means actions or occurrences on the webpage that the code listens for and responds to using event handlers.
Like "Click", "Submit"

### 19. What is the Event interface?
The Event interface represents an object with properties that describe DOM events
It has properties like event.target

### 20. How do we register event handlers for a selected element?
Use addEventListener() method
Syntax: element.addEventListener(eventType, function)

### 21. What is event propagation? How many phases are there? In what order does it occur?
Event propagation describes the order in which the events tarvel through the DOM tree
There are 2 phases
- Event Bubbling - event "bubbles up" and travels outward
- Event Capturing - event travels from the root down into the target element

### 22. Explain event delegation. Why is it important?
Event Delegation is an optimaztion technique when there are muitiple event handlers that do the same thing. We could bind 
the event handler once to their common parent element

It is important for development efficiency

