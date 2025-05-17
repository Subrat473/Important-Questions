// What is the difference between undefined and not defined in JavaScript?

// undefined means the variable is declared but has no value.

// not defined means the variable was never declared — causes a ReferenceError.







// What is the output of the following code?


let x;
console.log(x);


// undefined

// Because x is declared but not assigned.






// What will be the output here?


// console.log(y);
// ReferenceError: y is not defined

// Because y was never declared.







//  How can you check if a variable is not defined without throwing an error?


// if (typeof myVar !== 'undefined') {
//   console.log("Defined");
// }


// Use typeof to avoid ReferenceError — typeof never throws.