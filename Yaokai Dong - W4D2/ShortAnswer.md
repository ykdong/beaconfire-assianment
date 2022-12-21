### 1. What are the different kinds of tests?
3 major tests:
Functional Testing:
- Unit test: testing the smallest unit of code on its own
- Integration test: testing different units of code that may interact with each other
- End-to-End test: testing the application from the end user's perspective
- - Means recreate real-world scenarios and follow the entire flow

Non-Functional Testing:
- Sterss test: verifies the stability and reliability of the system, determines the bottleneck
- Performance test: determines how the stability, speed, scalability and responsiveness of an application holds up under a given workload
- Usability test: determines how easy and user-friendly the application is 
- Acceptance test: determines whether or not the application has met the requirement specifications

Maintainance Testing:
- Regression test: testing the application after making changes to ensure backwards-compatibility

Testing is important because it identifies bugs and issues in the development process so they're fixed
prior to product launch

### 2. What is the difference between BDD and TDD?
BDD stands for Behavior-driven Development
TDD stands for Test-driven Development

The key difference is their life cycle
- BDD write a business case, then make the test case pass
- TDD write a failing feature test, then make the test pass, and refactor the code base
In development, the BDD is more efficent than TDD

### 3. What libraries can we use to test JS? Explain some of their features?
1. Assertion Libraries: Assert.js / Chai.js
- Assert.js: a Node.js core module that provides assertion functions
- - includes: equal / strictEqual / deepEqual / deepStrictEqual / throws
- Chai.js: an assertion library that provides BDD and TDD based assertion functions
- - includes: expect / should / assert 
- - chai-http: And an add-on library for testing using HTTP requests, test for: Response status / Response schema/payload / Response latency

2. Mocha: a JS testing framework that simplifies asynchronous testing

3. Sinon: a testing library that provides standalone test spies, stubs and mocks for JS
- Test Spy: a function that records arguments, return values, the value of 'this' and exceptions thrown for all of its calls
- Test Stub: a function with customizable behavior that is used to replace another function

4. Jest: JS testing framework mainly designed for React UI testing
- Runs muitiple test suites concurrently
- Can print code coverage reports & mock entire libraries
- provides test hooks to set up preconditions and clean up after tests

5. Supertest: an HTTP assertions library that allows developer to test Node.js HTTP servers

### 4. How do we test asynchronous code?
In Mocha, we have 2 method
- done() : a function that tells mocha to wait until it is called before completing the test case
- async-await: writing testing case like normal JS async-await function

### 5. What should we pay attention to when testing our code?
- 1. We want to making sure what exactly we are testing
- 2. We want to making sure what exactly the tested unit returns. Say if we have a unit code that always return true, We have no way to test the false case

### 6. What is code coverage about?
The percentage of code that is run by automated tests