### 1. What is Node.js?
Node.js is an open-source, single-threaded, backend JS runtime environment that runs on the V8 engine
It's event-driven architecture for asynchronous I/O

### 2. What are some differences between Node.js and JavaScript?
JS is programming language
Used for frontend development, node.js, and general-purpose scripting
It's engine includes V8, JSCore, Spidermonkey, and Chakra
It could use Web APIs

Node.js is JS runtime environment
Used for backend server development
It's on V8 engine
And can not use Web APIs

### 3. What is npm?
npm stands for Node package manager. Which is a JS package manager that provides a command-line interface for accessing and 
installing packages from the npm registry

### 4. What is CommonJS? How does it differ from ES Modules? How do we import files into other files in Node.js?
CommonJS is the standard module system built into Node.js. And not supported in browsers

ES modules are asynchronous pre-parses file to load modules first. Use "import", "export" for I/O. And is used at the beginning of the file
CommonJS is synchronous loads modules on demand. Use "require" and "module.exports" for I/O. And could use anywhere in the file

For importing, we use "require" keyword

### 5. How can you make the server automatically restart when files are modified?
We could use nodemon. 
Nodemon is a package that provides a CLI comman that starts a node application and automatically restarts after detecting any changes in the directory

### 6. What are some global objects in Node.js?
Console, Process are built-in global objects
Process is a global object that gives information and control over the current Node.js process

### 7. Explain how the Node.js architecture is event-driven in terms of event emitters and other core modules.
Event emitter is based on Publisher-Subscriber mode. Is a software architecture design pattern where publishers emit events to their subscribers, 
who react by doing some actions. Which works very similarly to browser event listeners
So Node.js detects the event and doing actions based on the event type   

### 8. What are streams? In Node.js, what are the different kinds of streams?
Stream is an interface for managing large amounts of data more efficiently by processing them in smaller chunks at a time
4 types in Node.js
- Writable: streams that you can write data to. Like HTTP client request & server response, fs write stream
- Readable: streams that you can read data from. Like HTTP client response & server request, fd read stream
- Duplex: streams that can be read from and written to. Like net.Socket
- Transform: Duplex streams that can modify the data during read and write operations

### 9. What is the difference between fs module’s readFile and createReadStream?
fs.createReadStream() is a FileHandle method that creates a readable stream
fs.readFile(path) read all the contents of the file at this path at once

### 10. What are the different timing or scheduling functions in Node.js?
There are 3 functions 
- setTimeout(): Used to schedule code execution after a designated amount of milliseconds
- setImmediate(): Used to execute code at the end of the current event loop cycle
- setInterval(): Used to call a function at specified intervals(milliseconds)

### 11. How does the event loop work in Node.js?
The Event Loop allows Node.js to perform non-blocking I/O opetations despite the fact that JS is single-threaded
It is done by assigning operations to the operating system whenever and wherever possible
It it an endless loop with 6 phases
- Timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
- Pending callbacks: executes I/O callbacks deferred to the next loop iteration
- IDLE, prepare handlers: *only used internally
- Poll: check for I/O events & execute their callbacks (HTTP requests, file system)
- Check handlers: setImmediate() callbacks are invoked here
- Close callbacks: some close callbacks, e.g. socket.on('close', ...)

### 12. How do you manage multiple node versions?
Use Node Version Manager(NVM): The NVM is a standalone package that adds different versions to a specified path

### 13. Explain the request & response cycle.
- 1. Browser sends a GET request to the DNS(Domain Name System)
- - DNS resolve processes the request and returns the server IP address
- - Browser sends HTTP request to that IP address
- 2. Server receives the request, process it, and send back response containing the html file
- 3. Browser gets the response, parses the HTML, and displays the webpage

### 14. Explain serialization vs deserialization.
Serialization: is the process of converting an object into a stream of bytes
Deseriazation: is the process of converting a stream of bytes into the original object

### 15. What is Express.js?
Express.js is a lightweight, unopinionated, most popular JS web freamwork

### 16. How do you build a basic server in Node.js using express?
- Import required package
- Apply middleware
- Serve static file
- Create route handling for HTTP requests
- Make server listen for requests on certain port

### 17. What is middleware?
Middleware is functions with access to the incoming request & outgoing response objects that can invoke the next middleware

### 18. What are ports? Which one is reserved for HTTP and HTTPS?
Port is communication endpoints that separate web traffic for different services, ranging from 0 to 65,535
Port 80 is reserved for HTTP, Port 443 is reverved for HTTPS

### 19. What is the difference between response.send() and response.write() in express?
The major different is res.send() can only be called once, it is equivalent to res.write() + res.end()

### 20. Explain query strings vs route parameters.
Query strings are data sent in the GET request URL after the "?". Like "/page=2&limit=3
Route parameters are named segments of the URL that represents values at that position. Like "/profile/:userID" the "uerID" would be mapped to some value in the URL