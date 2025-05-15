getName(); 
console.log(x);
var x = 4;
function getName() {
    console.log("namaste javascript");
    
}


// Hoisting is a concept which enables us to ectract values of variables and functions even before initialising/assigning values without getting error and this is happening due to the 1st phase(memory creatiobn phase) of the execution of the Execution Context.


//  Q: How is function hoisting different from variable hoisting?


// Function declarations are hoisted with their entire definition. You can call them before their definition in the code.

// Variables declared with var are hoisted but initialized to undefined. You cannot access their value until after initialization.

// Function expressions (especially with var) are not hoisted with definition.








//  Q: Explain Temporal Dead Zone (TDZ).

// TDZ is the time between the start of the block and the actual declaration of the let or const variable where it exists but cannot be accessed.

// Example:

// javascript
// Copy
// Edit
// {
//   // TDZ starts
//   console.log(a); // ReferenceError
//   let a = 10; // TDZ ends
// }
