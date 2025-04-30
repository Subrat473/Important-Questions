/* 1. What is the difference between var, let, and const in JavaScript?

- var: Function-scoped, can be re-declared and updated.

- let: Block-scoped, can be updated but not re-declared in the same scope.

- const: Block-scoped, cannot be updated or re-declared.





2. Explain the concept of closures in JavaScript with an example.

A closure is when a function remembers the variables from its outer scope even after the outer function has returned.

Example:

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2






3. How does the this keyword work in JavaScript?

"this" refers to the object that is executing the current function.

In a method: this is the object.

In a regular function: this is undefined in strict mode or window in non-strict mode.

In arrow functions: this is lexically inherited.







4. What are higher-order functions? Provide an example.

A function that takes another function as an argument or returns a function.
Example:

function greet(name) {
  return function(message) {
    console.log(${message}, ${name});
  };
}
const hello = greet('Alice');
hello('Hi'); // Hi, Alice





5. What is the difference between synchronous and asynchronous JavaScript?

Synchronous: Code runs line by line; blocks further execution.

Asynchronous: Allows other operations to continue while waiting (e.g., API calls, setTimeout).





6. Explain the difference between forEach and map methods in arrays.

- forEach: Executes a function on each element; doesn’t return anything.

- map: Executes a function on each element and returns a new array.





7. What is the purpose of Promises and how do you use them?

Promises handle asynchronous operations.

Syntax:

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));





8. What are arrow functions and how are they different from regular functions?

Arrow functions are shorter and don’t have their own this.

Example:

const add = (a, b) => a + b;




9. How does event delegation work in JavaScript?

Event delegation uses a parent element to handle events for child elements using event bubbling.

Example:

document.getElementById('list').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('Clicked on:', e.target.textContent);
  }
});





10. What are REST APIs?

REST APIs are web services that follow REST architecture using HTTP methods (GET, POST, etc.) to interact with resources.




11. How do you ensure the security of an API?

- Use HTTPS

- Validate inputs

- Use authentication (e.g., JWT)

- Rate limiting

- Avoid exposing sensitive data






12. Explain the purpose of HTTP status codes in API responses.

They inform the client about the result of their request:

- 200 OK

- 201 Created

- 400 Bad Request

- 401 Unauthorized

- 404 Not Found

- 500 Server Error







13. How would you optimize API performance?

- Use caching

- Paginate large data

- Minimize payload size

- Optimize DB queries

- Use CDN if needed






14. What is the difference between GET and POST methods in REST APIs?

- GET: Retrieves data; no changes on the server.

- POST: Sends data to create/update resources.

*/