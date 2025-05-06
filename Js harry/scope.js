// Scope in Js - The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.

var c = 400;


if (true){
    let a = 300;
    const b = 90;
    var c = 50;

}


//console.log(a);
//console.log(b);
console.log(c);
