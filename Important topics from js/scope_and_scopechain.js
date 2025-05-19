// Explain Scope and Scope Chain in JavaScript



// Scope
// Scope in JavaScript determines the accessibility of variables and functions at various parts of one's code or program.
// In other words, Scope will help us to determine a given part of a code or a program, what variables or functions one can access, and what variables or functions one cannot access.
// Within a scope itself, a variable a function, or a method could be accessed. Outside the specified scope of a variable or function, the data cannot be accessed.
// There are three types of scopes available in JavaScript: Global Scope, Local / Function Scope, and Block Scope. Let us try to understand each one of them briefly in the following section.
// Global Scope:
// Variables or functions (or methods) that are declared under a global namespace (like area or location) are determined as Global Scope. 
// It means that all the variables that have global scope can be easily accessed from anywhere within the code or a program.
// Example: In this example, we will be declaring a global variable which we will use in the later part of our code. We will call that variable in one function. We will call that function inside another function and then we will call that other function to


// Global Scoped letiable
let global_letiable = "Hello to all";

// First function...
function first_function() {
    return global_letiable;
}

// Second function...
function second_function() {
    return first_function();
}

console.log(second_function());


// Output - Hello to all





// Local or Function Scope:
// Variables that are declared inside a function or a method have Local or Function Scope.
// It means those variables or functions which are declared inside the function or a method can be accessed within that function only.
// Example: In this example, we will declare the main function which will consist of a local/function scoped variable. We will declare a nested function that will take that variable into consideration and perform a multiply operation on it. We will call the nested function inside the main function itself and thereafter the main function outside its declaration.

// Then at last we will call our local/function scoped variable along with the local/function scoped function to see what output they will display upon their calling.




function main_function() {

    // letiable with Local Scope...    
    let a = 2;

    // Nested Function having Function Scope    
    let multiply = function () {

        // It can be accessed and altered as well
        console.log(a * 5);
    }

    // Will be called out when main_function gets called
    multiply();
}

// Display's the result...
console.log(main_function());

// Throws a reference error since it 
// is a locally scoped letiable
console.log(a);

// Throws a reference error since it 
// is a locally scoped function
multiplyBy2();



// Output - 10 , undefined, uncaught ReferenceError: a is not defined





// Block Scope:
// Block Scope is related to the variables or functions which are declared using let and const since var does not have block scope.
// Block Scope tells us that variables that are declared inside a block { }, can be accessed within that block only, not outside of that block.
// Example: In this example, we will declare a block using curly braces "{ }", and inside that block, we will declare a variable having a certain value in it. We will call that variable outside the blocked scope to see what output it actually displays upon calling.



{
    let x = 13;
}
// Throws a reference error 
// since x is declared inside a block which 
// cannot be used outside the block
console.log(x);








// Scope Chain
// JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
// Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
// This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.
// Example: In this example, we will first declare a global scope variable which we will use in the later part of the code, and then we will declare the main function inside which we will do some stuff. We will declare another local/function scoped variable inside that main function and just after that we will declare two nested functions (having local/function scope) within the main function itself.

// First, the nested function will print the value of the local/function scoped variable and the second nested function will display the value of the globally scoped variable.
// We will call the two nested functions inside the main function and then call the main function outside its declaration namespace. 




// Global letiable
let global_letiable = 20;

function main_function() {
    // Local letiable
    let local_letiable = 30;

    let nested_function = function () {

        // Display the value inside the local letiable
        console.log(local_letiable);
    }

    let another_nested_function = function () {

        // Displays the value inside the global letiable
        console.log(global_letiable);
    }

    nested_function();
    another_nested_function();
}

main_function();



// Output - 30, 20