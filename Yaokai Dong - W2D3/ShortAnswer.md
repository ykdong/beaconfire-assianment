### 1. What are the disadvantages of synchronous code?
Synchronous code means executed line-by-line in the order that it is written, and one line of code must finish
execution before the next line is executed. Which means long-running operations will block whole program execution

### 2. What is asynchronous code in JavaScript?
Asunchronous code means a line of code doesn't need to finish execution before the next line is executed
Which could prevents long-running operations from blocking execution

### 3. Since JS is single-threaded, how does it achieve asynchronous code?
Javascript uses Event loop to manage the asyhchronous code

### 4. What does the event loop do? What data structures does it use?
Event Loop is a runtime model that handles execution of synchronous and asynchronous code by using:
- Call Stack
- Task Queue(aka Callback Queue, Message Queue). Task queue includes marcotask queue and microtask queue

### 5. What is the callback queue?
Callback queue also know as task queue is a queue of tasks that are executed after the current task

### 6. What is an HTTP request and HTTP response?
HTTP Request is what web clients send to a server to retrieve or submit data
HTTP Response is what web clients receive from a server to confirm that their request was received(may contain the requested data) 

### 7. How many HTTP methods are there? Explain each one.
4 HTTP methods
- GET: request data from a spefic resource
- POST: send data to a server to create a resource
- PUT: send data to a server to replace or update a resource
- DELETE: send data to a server to remove a resource
- - ### What is the difference between GET and POST? What about POST and PUT?
- - GET method should not have a body, means should not contain data, POST should contain a data body
- - PUT request is idempotent. That is, calling the same PUT request multiple times will always produce the same result
- - In contrast, calling a POST request repeatedly will creating the same resource multiple times 

### 8. Could you explain the different classes of HTTP status codes? What are some common status codes?
- 100 - 199 for informational responses
- 200 - 299 for successful reponses like 200 OK, 201 CREATED
- 300 - 399 for redirection message
- 400 - 499 for client error responses like 400 bad request, 404 not found
- 500 - 599 for server error responses like 500 internal server error, 503 service unavailable

### 9. What is AJAX?
AJAX stands for Asynchronous Javascript and XML, it is using XMLHttpRequest objects to asynchronously communicate with servers, 
exchange data, and update the webpage without reloading

### 10. What is XHR?
XHR stands for XMLHttpRequest is an object that manages server requests for data
XML stands for eXtensible markup language is used for storing / transporting data
we send requests to a server as follow:
- 1 create the request
- 2 configure the request(including HTTP method, url, headers)
- 3 send the request
- 4 execute code based on XHR states(success, in progress, error)

### 11. What is a Promise?
Is an object that represents the eventual completion/failure of an asynchronous operation and its resulting value

### 12. How many states does a Promise have? What are they?
3 states: pending, fulfilled, rejected

### 13. What is callback hell?
It's nested callback functions whose arguments are results of the outer callback
It's difficult to read, maintain and debug

### 14. What is the advantage of Promises over callbacks?
Since the promise consecutively invoking .then(). "Promise" is cleaner, more readable, easier debugging & error handling

### 15. Explain Promise.all() vs Promise.allSettled().
Promise.all() takes an input array of promises and returna a single promise array that resolves when they all resolve(all successful)
If one promise rejects, Promise.all() rejects
"all-or-nothing" situatins is where all promises must resolve to continue execution

Similar to Promise.all(). Promise.allSettled() always resolves with an array of all results, giving the access to each promise status & result
Means Promise.allSettled() could still resolve if one or more promises are rejected. It only store the status and result

### 16. What is the Microtask Queue?
Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue. That refer to "microtask queue"

### 17. What is the difference between making server requests via fetch and XHR?
The major difference is The Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the 
complex API of XMLHttpRequest

### 18. What is async & await? How do we use them?
"async" is a keyword for declaring functions that must return a promise
"await" is a unary operator that pauses execution of the async function until the given promise completes
if we want to make a function asynchronous, first we use "async" in function declaration. And use "await" together to make the function asynchronous

### 19. Explain localStorage vs sessionStorage.
localStorage and sessionStorage are almost identical and have the same API. The difference is that with sessionStorage, the date is persisted only
until the current window or tab is closed. With localStorage, the data is persisted until the user manually clears the browser cache

### 20. What do the async and defer attributes do when loading scripts?
"async" attribute: script is downloaded in paraller and executed right after completion, even if HTML hasn't been fully parsed
Features:
- May not execute scripts in order
- Useful if script doesn't manipulate DOM

"defer" attribute: script is downloaded in parallel, but it will be executed only after HTML is fully parsed
Features:
- executes in the order the scripts were imported
- useful if script depends on previous script or required full DOM
- same as putting `<script>` at the end after `<body>`, but not supported in all browsers

### 21. What are ES6 modules? Why are they useful? How do we make these modules available in other JS files?
ES6 modulea is one of the Javascript module systems that are natively supported in browsers as of ES6
It is useful because it makes our code more readable, more maintainability and easier to debug

We use "export" keyword to make our module available for other files
When we need to use those modules, we use "import" to import into our files
