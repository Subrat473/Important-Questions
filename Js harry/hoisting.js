// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// Following two lines will run successfully due to JavaScript Hoisting

console.log(a);
greet()
function greet(){
    console.log("Good morning");   
}

var a = 9; // Declaration hoisted to the top but initialization is not 