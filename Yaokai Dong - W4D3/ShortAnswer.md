### 1. Explain when you should and should not use TypeScript.
We should use TypeScript when:
- Build complex applications in large teams
- Increase code readability, quality, maintainability
- Catch simple errors before runtime
- Intellisense: shows intelligent code completiion, hover information, and signature help so that we can write code more quickly and correctly

We should NOT use TypeScript when:
- The ts is increasing the development time, we need to use more time to think of and define types
- We are the sole developer

### 2. What is static type checking? How can developers benefit from it?
Static type checking means TS checks the variable type before runtime. 
TS will warn us when assigning values to variables with conficting types

We could identify certain types of problems before running the code

### 3. What is type inference?
Means TS infers types of variables that lack annotations based on their innitial values
Like let a = 1; TS would infer the type of 'a' is number

### 4. How does the array type differ from tuples?
They have 2 major differences
- 1. Length: Array could be any length, while Tuple is a fixed-length array
- 2. Element type: Tuple could have mixed element types while Array in TS can not

### 5. What are enums?
enum defines an object with named constants that exists at runtime
It have 2 features:
- 1. If values are unspecified, numbers are implicitly assigned and auto-incremented
- 2. String enums require assigned initial values

### 6. Explain the difference between type any and unknown.
any: is default type that can accept any type
- TSC ignores type checking for 'any' type
- 'any' type is not equal to the type inference if type is not specified

unknown: more like a type place holder, when we not sure what type it may be, will decide when we actual using it
- 'unknown' type may be assigned values of any type
- if assigned with 'unknown', the variable type must be checked before accessing or using it 

For function types, we also have: 
- void: represents a value of nothing or undefined. Usually for functions that dosen't return values
- never: means never has a value, more specific than void, usually used in function that don't reach the end of execution(like: throw error)

### 7. How do you type functions?
- type the arguments the function assigned to 
- type the value the function returned

### 8. What is the difference between union and intersection types?
Union means the value should match at least one of the member types
intersection means the value should match all of the member types

### 9. What are type guards? What is narrowing?
Type guard is contitional statuments that checks a value's type before operationg on the value

Narrowing means TS analyzes the most specific type for a value at some position in the code based on the condition

### 10. What is type assertion?
Type assertion tells the TSC to recognize a variable as some other type, to satisfy type checking

### 11. Explain the difference type alias vs interface. When should you use each one?
They have 3 major differences:
- on Declaration: 
- - Type can be assigned with primitive types, literal values, object types, or a combination via union or intersection
- - Interface defines object types. Usually for annotating classes and objects
- OnExtending: type alias use intersection(&) to extending other types. Interface use 'extends' to extending other interfaces
- On adding fields: type alias would throw error if there are duplicate aliases. Interface would combine all keys if some interfaces have the same name

Types are better used when we create a function that will return an object
They are more recommended when using functions, complex types, etc

Interfaces are recommended for defining new objects or methods or properties of an object where it will receive a specific component
Interface works better when using objects and method objects

Interface are like the schema model in mongodb
Benefit of interface: it will indicate or warning the missing part when we use Interface

### 12. What is type readonly?
As the name indicated, TSC prevents re-assigning values to the readonly variable(unless in class constructor)

### 13. Explain the difference between public, private, protected.
- public:
- - Default setting. The varialbe can be accessed inside and outside the class
- private:
- - This variable can only be accessed within the class
- protected:
- - This variable can only be accessed within the class and its subclasses

### 14. What are generics?
Generics(<T>) is a placeholder type that is eventually substituted, when the type is references.
It is used for creating reusable, type-safe code