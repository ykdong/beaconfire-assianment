### 1. Explain MITM attacks. How do we prevent them?
MITM stands for Man-in-the-middle. It's when hackers listen on unprotected network traffic without authentication and notice

We could use HTTPS to prevent such
HTTP secure(HTTPS). HTTP with a layer of encryption that involves TLS/SSL certificates

TLS: Transport Layer Security
SSL: Serure Sockets Layer

### 2. Explain hashing. Why do we hash passwords and other sensitive information?
Hashing is one-way encryption with a unique method and output(canot be reversed)
For hashing, we could use:
- Bcrypt, MD5, SHA-1, SHA-2, NTLM, LANMAN

### 3. What’s the difference between authentication and authorization?
Authentication: varify their identity
Authorization: verify their permissions

### 4. Is HTTP stateful or stateless? What does it mean for it to be stateful or stateless?
HTTP is stateless
Stateless does not require the server to retain the server infomation or session details
And there is no tight dependency between server and client
The requests are not dependent on the server side and are self contained

Stateful require server to save the status and session information
There is tight dependency between server and client
The requests are always dependent on the server side

### 5. What are sessions and cookies? Why do we use them?
Cookies are client-side files that are stored on a local computer and contain user information
Cookies expire after the user specified lifetime

Session are server-side file that store user information
Session ends when user closes the browser or logs out of the program

### 6. Explain CSRF. How do we prevent it?
CSRF stands for cross-site request forgery
Means attacker forces authenticated users to send a request without them knowing or doing anything

We could prevent by using: 
- idempotent GET, avoid cookies, SameSite cookies, CSRF token, double-submit cookie

### 7. Explain clickjacking. How do we prevent it?
Attacker forces authenticated users to send a request by tricking them into clicking something
that looks legit

We could prevent by:
- X-Frame-Options, Content Security Policy Headers, SameSite cookies, frame-killing

### 8. Explain XSS. How do we prevent it?
XSS stands for cross-site scripting
Attackers inject scripts into a website through user input fields

We could prevent by:
- input validation, output encoding

### 9. What are regular expressions?
Strings that describe patterns for matching & searching text

### 10. Explain token-based auth. Is it stateful or stateless and why?
Client-server requests contain tokens so that the server doesn't need to store user data
It is stateless 

### 11. What is JWT?
JWT stands for JSON Web Token
It is an open standard that defines a compact and self-contained way for securely transmitting
data through JSON objects

JWT structure:
- Header: token metadata(cryptography algorithm, type)
- Payload: user data, permissions, etc
- Signature: proves the owner & user for verification

### 12. Where can we store JWT?
We could store JWT tokens using cookie
With secure, httpOnly, and proper same site flag, it will prevent XSS and CSRF

### 13. What are the differences between JWT and sessions & cookies for user auth?
JWT is stateless communication, store user data in JWT
We have to manully send the JWT on each request
JWT is stored on client-side cookie, web storage or memory
If JWT stored in cookis, it's vulnerable to CSRF
If JWT stored in web storage, it's vulnerable to XSS
When user logging out, the server has to wait for JWT expiration
When Renewal, we have to refresh the tokens
Purpose for JWT is server-server connection and auto information storage

Session is stateful communication, store user data in server
Session information is send automatically
And stored in client-side cookie
Session is vulnerable to CSRF
When user logging out, delete the session would delete the information in it
And should update the session to renewal it
Purpose for session is browser-server connection and general information storage

### 14. What is SOP? How do we fix it?
SOP stands for same origin policy
Is the browser restricts script from one origin from interacting with scripts or documents from another origin
Origin: URI scheme, host name, port number
We could use proxy and enable CORS

### 15. What is CORS?
CORS stands for cross-origin resource sharing
The server uses HTTP headers to decide which origins that a browser can load resources from

### 16. What is SSO? What are some examples?
SSO stands for single sign-on
Using one set of credentials to authenticate themselves in muitiple applications
Includes services provider, and identity privider

### 17. What is OAuth 2.0? Describe the OAuth workflow in detail.
Open Authorization (OAuth) 2.0: a token-based authorization standard for allowing applications to access data from other applications

The work flow as follow:
1. The end user logs in, the client application sends the authentication request 
to the authorization server to obtain an access token
2. Authorization server validaates the request and generates an access token for the client application
3. Client application uses this access token to send HTTP requests to API gateway
4. API gateway then performs the following:
- Identifies the application using the clientid
- Validates the token locally or remotely
- Checks if the requested resources is part of the scopes in the token
- Checks the audience
- Send back request resources to the client application