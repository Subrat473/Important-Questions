// asynchronous ,   synchronous


// Jis bhi code me delay hone waala hai wo async hota hai, settimeout, setinterval, promises. 


// Synchronous Execution


// Code is executed sequentially, one statement at a time, in the order it is written.
// Each operation must complete before the next one starts, which can block the execution flow if an operation takes time (e.g., reading a large file or performing a heavy computation).

// Example:

// javascript
// console.log("Start");
// console.log("Middle");
// console.log("End");
// Output:

// Start  
// Middle  
// End





// Asynchronous Execution


// Allows certain operations to happen in the background, enabling the program to continue executing other tasks without waiting for the operation to complete.
// Often used for tasks like fetching data from a server, reading files, or handling timers.
// Implemented using techniques like callbacks, promises, and async/await.



// Example with a timer:

// javascript
// console.log("Start");
// setTimeout(() => {
//   console.log("Middle");
// }, 1000);
// console.log("End");
// Output:

// Start  
// End  
// Middle (after 1 second)


