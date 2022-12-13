### 1. Explain MVC and the file structure in express.
MVC stands for Model, View, Controller. It's a design pattern & application architecture
where we divide it into three components, which are:
- model: logic realted to the database
- view: logic related to the UI
- controller: processes incoming requests, interacts with data models, and updates the view 

The file structure in express have theree main parts:
- Setting files: All the set up logic should be in this file. Which includes:
- - 1. index.js: the entry point of the server/application, usually executed with "node"
- - 2. server.js/app.js: a module that sets up the server application(imported into index.js)
- MVC files. Which includes:
- - 1. models/: This folder would contain all the database models
- - 2. views/: This folder would contain all the files to display the webpage/UI
- - 3. routers/: This folder would contain all the routes we created
- - 4. controllers/: This folder would contain the routes controllers for all the endpoints of the app
- Supporting files: This file would contain the server supporting files. Which may includes:
- - 1. config/: settings for connecting to the database, environment variables, API keys, etc
- - 2. middleware/: function that intercept request
- - 3. public/: static assets available for download by the browser
- - 4. utils/: code or shared logic that is reused throughout the application
- - 5. test/: testing files

### 2. What are static websites?
Static website means pages are hardcoded and are displayed the same to all users.

### 3. What are dynamic websites?
Dynamic website means pages may have different contents & structure for different users.
The HTML is programmatically generated when navigating to a page

### 4. What are the major differences between static and dynamic websites?
Static is hardcoded, pre-built. It's quick, easily served and cached. For updating, should create 
new files for each page and manully modify each page. Static is expensive for personalization.
Use cases are like: protfolio, documentation, blogs

Dynamic is generated on request. Processing by server, not cached. For updating, it could reuse page templates.
It's fairly easy and cheap to personalization.
Use cases are like: online stores, social media

### 5. What is first contentful paint and time to interactive?
Those terms are related to app performance
First Contentful Paint(FCP) is the time takes for the first text/image to become visible on the page
Time to Interactive(TTI) is the time takes for the page to become fully interactive

### 6. What is SSR, CSR, and SSG? When would you use each one?
SSR stands for Server-side Rendering. Creating dynamic websites by programmatically generating HTML documents on the 
server during runtime. In other words, on every page request, create entire HTML document based on user-specific data from 
the database and server it
Used on the website that is not very interactive, better performance with SSR

CSR stands for Client-side Rendeting. Creating dynamic websites by programmatically generating HTML on the client browser use DOM manipulation
Used on the website that is more interactive 

SSG stands for Static Site Generation. Creating static websites by programatically generating all possible HTML files on the server
during build time. Serve the static files immediately on every page request

### 7. How do they affect page performance?
SSR generate HTML on server runtime. CSR generate HTML on client runtime. SSG generate HTML on server build time
The, SSG is the best on SEP/TTI/FCP performance, because it used stasic page contents. Which makes it more fast, low cost, and secure. And could use CDN
The SSR is seond place on FCP/TTI/SEO performance, it has simpler logic to load
The CSR is the last place on FCP/TTI/SEO performance, because it needs more logic and could delay the initial page load.

### 8. What are template engines and their advantages?
Template engine is software that transforms static template files into HTML files by substituting variables with actual values
during server runtime
This approach makes it easier to design an HTML page, easier to read and rasier to debug

### 9. What is DRY?
DRY stands for Don't Repeat Yourself. It'a the software development principle of avoiding repeated/duplicated code, usually replacing
it with abstractions
- JS: we use functions, classes, and modules to achieve this
- SCSS: we use partial, mixin, extend
- EJS: partial, loops

### 10. What is CRUD?
CRUD stands for Create, Read, Updata, Delete. Which are the four basic operations that users should be able to do in software applications
- C: post
- R: get
- U: put, patch
- D: delete

### 11. What is a seed file for?
Seed file is script that programmatically populates the data store with as much fake data as needed.
It's mainly for testing purpose