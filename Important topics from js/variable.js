// In JavaScript, variables are used to store data that can be changed later on. They can be declared using the var, let, or const keywords. Each keyword has different properties and usage scenarios.



// var: This keyword is function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs. It was the only way to declare variables before ES6.

// let: Introduced in ES6, this keyword is block-scoped and not hoisted to the top, making it suitable for mutable variables.

let message;
message = 'Hello!'; // store the string 'Hello!' in the variable named message
console.log(message); // outputs "Hello!"


// const: Also introduced in ES6, this keyword is block-scoped and immutable, meaning the variable cannot be reassigned, though objects can still be mutated.

const PI = 3.14159;
console.log(PI); // outputs 3.141



// What is the difference between var, let, and const?

// var: function-scoped, hoisted, can be re-declared.

// let: block-scoped, not hoisted the same way, no re-declaration in the same scope.

// const: block-scoped, must be initialized, value can't be reassigned.




// What will be the output of the below code?

// console.log(a);
// var a = 5;

// Output: UNDEFINED (because of hoisting)



// Explain closures with variables:

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   }
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// Closure allows inner to access count from outer, even after outer has finished executing.

